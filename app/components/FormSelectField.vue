<script lang="ts" setup>
import { ref, computed, useId } from 'vue'

export interface OptionItem {
  [key: string]: any;
}

const props = withDefaults(defineProps<{
  name: string,
  icon?: string,
  label?: string,
  options?: Array<OptionItem | string>,
  valueField?: string,
  textField?: string,
  isRequired?: boolean,
  type?: 'choix' | 'oui_non',
  size?: 'Petit' | 'Moyen' | 'Grand'
}>(), {
  label: '',
  options: () => [],
  valueField: 'value',
  textField: 'label',
  isRequired: false,
  type: 'choix',
  size: 'Moyen'
});

const model = defineModel<string>({ default: '' });
const baseId = useId();

const errors = ref<string[]>([]);
const hasError = computed(() => errors.value.length > 0);

// Normalisation des options (gère aussi le cas "oui_non" si aucune option n'est fournie)
const safeOptions = computed(() => {
  if (props.type === 'oui_non' && props.options.length === 0) {
    return [
      { value: 'oui', text: 'Oui' },
      { value: 'non', text: 'Non' }
    ];
  }

  return props.options.map((opt, idx) => {
    if (typeof opt === 'string') {
      return { value: opt, text: opt };
    }
    // Compatible avec Prismic (ex: label/value ou option_label/option_value)
    const val = opt[props.valueField] ?? opt.value ?? opt.option_value ?? String(idx);
    const txt = opt[props.textField] ?? opt.text ?? opt.option_text ?? String(val);
    return {
      value: String(val),
      text: String(txt)
    };
  });
});

// Tailles dynamiques
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'Petit':
      return 'py-1.5 px-4 text-xs';
    case 'Grand':
      return 'py-3 px-8 text-base';
    case 'Moyen':
    default:
      return 'py-2 px-6 text-sm';
  }
});

// Validation lazy déclenchée au changement
const validate = () => {
  const errList: string[] = [];
  if (props.isRequired && (!model.value || model.value === '')) {
    errList.push('Veuillez sélectionner une option.');
  }
  errors.value = errList;
};
</script>

<template>
  <div class="flex flex-col items-start">
    <p class="mb-2 font-medium" :class="hasError ? 'text-red-700' : ''">
      {{ label }}<span v-if="isRequired">&nbsp;*</span>
    </p>

    <div
      class="inline-flex flex-wrap items-center gap-1 p-1 border rounded-lg transition-colors"
      :class="hasError ? 'border-red-700 text-red-700' : 'border-slate-700 text-slate-300'"
      role="radiogroup"
      :aria-invalid="hasError"
    >
      <Icon v-if="icon" :name="icon" class="mx-2 shrink-0" />
      <div v-for="(option, index) in safeOptions" :key="option.value" class="flex items-center">
        <input
          :id="`${baseId}-${index}`"
          v-model="model"
          type="radio"
          :name="name"
          :data-field-label="label"
          :value="option.value"
          :required="isRequired"
          class="hidden peer"
          @change="validate"
          @form-validate="validate"
        />
        <label
          :for="`${baseId}-${index}`"
          :class="[
            sizeClasses,
            'cursor-pointer select-none rounded-md font-medium transition-all duration-200',
            'text-slate-400 hover:text-white',
            'peer-checked:bg-sky-600 peer-checked:text-white peer-checked:shadow-sm',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-sky-500'
          ]"
        >
          {{ option.text }}
        </label>
      </div>
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