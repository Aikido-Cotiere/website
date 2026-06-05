<script lang="ts" setup>
const props = withDefaults(defineProps<{
  label?: string,
  field: RegleFieldStatus<any, any>,
}>(), {
  label: '',
});
</script>

<template>
  <div v-if="field" class="grid auto-cols-auto grid-flow-col items-center justify-center gap-12">
    <label class="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
      <input type="checkbox" class="sr-only peer" :value="field.$value" v-model="field.$value" />
      <div class="w-12 h-7 bg-slate-500 rounded-full peer peer-checked:bg-sky-700 transition-colors duration-200">
      </div>
      <span
        class="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>

    </label>
    <span class="cursor-pointer 
        rounded-full 
        py-2 px-9 
        text-white 
        transition-colors duration-200">{{ label }}</span>
  </div>
</template>
