<script setup lang="ts">
import { computed, ref } from 'vue';
import { VueDatePicker } from '@vuepic/vue-datepicker';
import { fr as frFR } from 'date-fns/locale';
import '@vuepic/vue-datepicker/dist/main.css';

const props = withDefaults(defineProps<{
	label?: string;
	name?: string;
	placeholder?: string;
	isRequired?: boolean;
}>(), {
	label: '',
	placeholder: 'Sélectionner une date',
	isRequired: false,
});

const model = ref<string | null>(null);
const errors = ref<string[]>([]);
const hasError = computed(() => errors.value.length > 0);
const serializedDate = computed(() => model.value ?? '');
const datepickerTheme = {
	'--dp-background-color': '#030712',
	'--dp-text-color': '#f9fafb',
	'--dp-hover-color': '#1f2937',
	'--dp-hover-text-color': '#f9fafb',
	'--dp-primary-color': '#0284c7',
	'--dp-primary-text-color': '#ffffff',
	'--dp-border-color': '#334155',
	'--dp-border-color-hover': '#14b8a6',
	'--dp-border-color-focus': '#14b8a6',
	'--dp-menu-border-color': '#334155',
	'--dp-menu-background-color': '#111827',
	'--dp-icon-color': '#9ca3af',
	'--dp-font-family': 'DM Sans, sans-serif',
};
const datepickerUi = {
	input: 'rounded-lg border border-slate-700 bg-gray-950 px-3 py-3 text-gray-50 placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/40',
	menu: 'rounded-lg border border-slate-700 shadow-xl',
};

function validate() {
	errors.value = props.isRequired && !model.value
		? ['Ce champ est obligatoire.']
		: [];
}
</script>

<template>
	<div>
		<p class="mb-2 font-medium" :class="hasError ? 'text-red-700' : ''">
			{{ label }}<span v-if="isRequired">&nbsp;*</span>
		</p>

		<div :aria-invalid="hasError" :class="hasError ? 'rounded-lg ring-1 ring-red-700' : ''">
			<VueDatePicker
				v-model="model"
				:model-type="'yyyy-MM-dd'"
				:locale="frFR"
				:formats="{ input: 'dd/MM/yyyy' }"
				:ui="datepickerUi"
				:style="datepickerTheme"
				:placeholder="placeholder"
				:dark="true"
				:enable-time-picker="false"
				:auto-apply="true"
				:clearable="true"
				@update:model-value="validate"
			/>
			<input
				type="hidden"
				:name="name"
				:value="serializedDate"
				@form-validate="validate"
			/>
		</div>

		<div v-if="hasError" class="mt-1">
			<span v-for="(error, index) in errors" :key="index" class="block text-sm text-red-700">
				{{ error }}
			</span>
		</div>
	</div>
</template>