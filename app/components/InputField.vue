<template>
  <div v-if="field">
    <p class="mb-2 font-medium" :class="field?.$error ? 'text-red-700' : ''">{{ label }}<span
        v-if="isRequired">&nbsp;*</span></p>
    <div class="flex items-center pl-3 rounded-lg overflow-hidden border border-slate-700 focus-within:border-sky-700"
      :class="field?.$error ? '!border-red-700 !text-red-700' : ''">
      <Icon v-if="icon" :name="icon" class="block" />
      <input :placeholder="placeholder" class="w-full p-3 bg-transparent outline-none" :type :name
        v-model="field.$value" v-bind="$attrs" />
    </div>
    <div v-if="field?.$error">
      <span class="text-red-700" v-for="(err, i) in field?.$errors" key="i">{{ err }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RegleFieldStatus } from '@regle/core';

defineOptions({
  inheritAttrs: false
})
const props = withDefaults(defineProps<{
  icon?: string,
  placeholder?: string,
  label?: string,
  name?: string,
  type?: 'text' | 'password' | 'date' | 'email' | 'phone',
  field: RegleFieldStatus<any, any>,
}>(), {
  label: '',
  type: 'text',
});

const isRequired = computed(() => {
  return !!props.field?.$rules.required;
})


</script>

<style></style>