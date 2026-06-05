<template>
  <div>
    <p class="mb-2 font-medium">{{ label }}<span v-if="required">&nbsp;*</span></p>
    <div class="flex items-center pl-3 rounded-lg overflow-hidden border border-slate-700 focus-within:border-sky-700">
      <Icon v-if="icon" :name="icon" class="block" />
      <input :placeholder="placeholder" class="w-full p-3 bg-transparent outline-none" :type :name v-model="model" v-bind="$attrs" :required />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
const model = defineModel({
  required: true,
  type: String
})
withDefaults(defineProps<{
  icon?: string,
  placeholder?: string,
  label?: string,
  name?: string,
  type?: 'text' | 'password' | 'date' | 'email' | 'phone',
  required?: boolean
}>(), {
  label: '',
  type: 'text',
  required: false
});
</script>

<style></style>