<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Content } from "@prismicio/client";

const props = defineProps(getSliceComponentProps<Content.FormContentSlice>(
    ["slice", "index", "slices", "context"]
));

const isVisible = ref(false);

function updateVisibility() {
    const dependsOn = props.slice.primary.depends_on?.trim();
    const dependencyCode = props.slice.primary.dependency_code?.trim();

    if (!dependsOn) {
        isVisible.value = true;
        return;
    }

    if (!dependencyCode) {
        isVisible.value = false;
        return;
    }

    const fields = Array.from(document.getElementsByName(dependsOn));
    const checkedRadio = fields.find((field) => field instanceof HTMLInputElement && field.type === 'radio' && field.checked);
    const target = checkedRadio ?? fields[0];

    if (!target) {
        isVisible.value = false;
        return;
    }

    const depId = target instanceof HTMLInputElement && target.type === 'radio' && !checkedRadio
        ? { value: '', checked: false }
        : target;
    const expression = dependencyCode.replaceAll('{depId}', 'depId');

    try {
        isVisible.value = Boolean(new Function('depId', `"use strict"; return (${expression});`)(depId));
    } catch {
        isVisible.value = false;
    }
}

onMounted(() => {
    document.addEventListener('input', updateVisibility, true);
    document.addEventListener('change', updateVisibility, true);
    updateVisibility();
});

onBeforeUnmount(() => {
    document.removeEventListener('input', updateVisibility, true);
    document.removeEventListener('change', updateVisibility, true);
});

const sanitizedInputType = computed<"text" | "date" | "email" | "phone" | "password" | undefined>(() => {
    const type = props.slice.primary.type;
    if (type === 'texte') return 'text';
    if (type === 'date') return 'date';
    if (type === 'email') return 'email';
    if (type === 'telephone') return 'phone';
    return undefined;
});

const isSelectType = computed<'choix' | 'oui_non' | undefined>(() => {
    const type = props.slice.primary.type;
    if (type === 'choix' || type === 'oui_non') return type;
    return undefined;
});

const sizeClass = computed(() => ({
    'col-span-1': props.slice.primary.size === 'Petit',
    'col-span-2': props.slice.primary.size === 'Moyen',
    'col-span-4': props.slice.primary.size === 'Grand',
}));
</script>

<template>
    <!-- Champs textuels et dates -->
    <FormTextField
        v-if="isVisible && sanitizedInputType"
        :placeholder="slice.primary.placeholder ?? undefined"
        :label="slice.primary.label ?? undefined"
        :name="slice.primary.technical_id ?? undefined"
        :is-required="slice.primary.is_required ?? false"
        :type="sanitizedInputType"
        :class="sizeClass"
    />

    <!-- Champs à choix unique et oui/non -->
    <FormSelectField
        v-else-if="isVisible && isSelectType"
        :name="slice.primary.technical_id ?? ''"
        :label="slice.primary.label ?? undefined"
        :options="slice.primary.option_list"
        :type="isSelectType"
        :size="slice.primary.size"
        :is-required="slice.primary.is_required ?? false"
        :class="sizeClass"
    />
</template>