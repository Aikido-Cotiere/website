<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  icon?: string,
  placeholder?: string,
  label?: string,
  name?: string,
  type?: 'text' | 'password' | 'date' | 'email' | 'phone',
  isRequired?: boolean
}>(), {
  label: '',
  type: 'text',
  isRequired: false
});

// Liaison bidirectionnelle avec le parent (Vue 3.4+)
const model = defineModel<string>({ default: '' });

const errors = ref<string[]>([]);
const hasError = computed(() => errors.value.length > 0);

// Validation déclenchée uniquement au changement
const validate = () => {
  const errList: string[] = [];
  const val = model.value?.trim() ?? '';

  if (props.isRequired && !val) {
    errList.push('Ce champ est obligatoire.');
  }

  if (val && props.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      errList.push('Le format de l’adresse email est invalide.');
    }
  }

  errors.value = errList;
};
</script>

<template>
  <div>
    <p class="mb-2 font-medium" :class="hasError ? 'text-red-700' : ''">
      {{ label }}<span v-if="isRequired">&nbsp;*</span>
    </p>

    <div
      class="flex items-center pl-3 rounded-lg overflow-hidden border border-slate-700 focus-within:border-sky-700"
      :class="hasError ? '!border-red-700 !text-red-700' : ''"
    >
      <Icon v-if="icon" :name="icon" class="block" />
      <input
        v-model="model"
        :placeholder="placeholder"
        class="w-full p-3 bg-transparent outline-none"
        :type="type"
        :name="name"
        :data-field-label="label"
        :required="isRequired"
        :aria-invalid="hasError"
        @change="validate"
        @form-validate="validate"
      />
    </div>

    <div v-if="hasError" class="mt-1">
      <span
        v-for="(err, i) in errors"
        :key="i"
        class="block text-sm text-red-700"
      >
        {{ err }}
      </span>
    </div>
  </div>
</template>