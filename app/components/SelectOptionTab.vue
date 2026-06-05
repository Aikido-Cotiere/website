<script lang="ts" setup>
const model = defineModel<object|string>()
const props = withDefaults(defineProps<{
  label?: string,
  name: string,
  options: Array<Object|String>,
  valueField?: String,
  textField?: String,
  required?: boolean
}>(), {
  label: '',
  required: false
});

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
  <div>
    <p class="mb-2 font-medium">{{ label }}<span v-if="required">&nbsp;*</span></p>
    <div class="flex space-x-2 p-1 border border-gray-500/50 rounded-full text-sm">
      <div v-for="option in safeOptions" class="flex items-center">
        <input type="radio" :name :id="option.value" class="hidden peer" :checked="option.value == model">
        <label :for="option.value" 
        class="cursor-pointer 
        rounded-full 
        py-2 px-9 
        text-gray-500 
        transition-colors duration-200 
        peer-checked:bg-indigo-600 peer-checked:text-white">
          {{ option.text }}
        </label>
      </div>
    </div>
  </div>
</template>