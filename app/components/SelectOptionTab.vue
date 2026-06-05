<script lang="ts" setup>
const props = withDefaults(defineProps<{
  label?: string,
  name: string,
  options: Array<Object | String>,
  valueField?: String,
  textField?: String,
  required?: boolean,
  field: RegleFieldStatus<any, any>,
}>(), {
  label: '',
  required: false
});

const isRequired = computed(() => {
  return !!props.field?.$rules.required;
})

const safeOptions = computed(() => {
  const opts: {
    value: string,
    text: string
  }[] = []
  for (const o of props.options) {
    const val = props.valueField ? (o[props.valueField as never] as object).toString() : o.toString()
    const txt = props.textField ? (o[props.textField as never] as object).toString() : o.toString()
    opts.push({ value: val, text: txt })
  }
  return opts;
})
</script>

<template>
  <div class="flex flex-col justify-start items-start">
    <p class="mb-2 font-medium" :class="field?.$error ? 'text-red-700' : ''">{{ label }}<span
        v-if="isRequired">&nbsp;*</span></p>
    <div class="flex flex-wrap item-center justify-center space-x-2 p-1 border border-gray-500/50 rounded-full text-sm"
      :class="field?.$error ? '!border-red-700 !text-red-700' : ''">
      <div v-for="option in safeOptions" class="flex items-center">
        <input type="radio" :id="option.value" :value="option.value" v-model="field.$value" class="hidden peer">
        <label :for="option.value" class="cursor-pointer 
        rounded-full 
        py-2 px-9 
        text-gray-500 
        transition-colors duration-200 
        peer-checked:bg-indigo-600 peer-checked:text-white">
          {{ option.text }}
        </label>
      </div>
    </div>
    <div v-if="field?.$error">
      <span class="text-red-700" v-for="(err, i) in field?.$errors" key="i">{{ err }}</span>
    </div>
  </div>
</template>