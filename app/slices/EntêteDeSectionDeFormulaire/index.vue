<script setup lang="ts">
import type { Content } from "@prismicio/client";
import EmphasisText from "~/components/EmphasisText.vue";
import TitleText from "~/components/TitleText.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(getSliceComponentProps<Content.FormSectionSlice>(
	["slice", "index", "slices", "context"]
));

const primary = props.slice.primary as unknown as {
	depends_on?: string;
	dependancy_code?: string;
};
const isVisible = ref(false);

function updateVisibility() {
	const dependsOn = primary.depends_on?.trim();
	const dependencyCode = primary.dependancy_code?.trim();

	if (!dependsOn) {
		isVisible.value = true;
		return;
	}

	if (!dependencyCode) {
		isVisible.value = false;
		return;
	}

	const fields = Array.from(document.getElementsByName(dependsOn));
	const checkedRadio = fields.find((field) => field instanceof HTMLInputElement && field.type === "radio" && field.checked);
	const target = checkedRadio ?? fields[0];

	if (!target) {
		isVisible.value = false;
		return;
	}

	const depId = target instanceof HTMLInputElement && target.type === "radio" && !checkedRadio
		? { value: "", checked: false }
		: target;
	const expression = dependencyCode.replaceAll("{depId}", "depId");

	try {
		isVisible.value = Boolean(new Function("depId", `"use strict"; return (${expression});`)(depId));
	} catch {
		isVisible.value = false;
	}
}

onMounted(() => {
	document.addEventListener("input", updateVisibility, true);
	document.addEventListener("change", updateVisibility, true);
	updateVisibility();
});

onBeforeUnmount(() => {
	document.removeEventListener("input", updateVisibility, true);
	document.removeEventListener("change", updateVisibility, true);
});
</script>

<template>
	<div v-if="isVisible" class="mx-auto text-balance text-2xl font-medium md:text-5xl col-span-4">
		<PrismicRichText :field="slice.primary.title" :components="{ em: EmphasisText, heading2: TitleText }" />
	</div>
</template>