<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>

<template>
  <v-divider :inset="props.blok.inset"></v-divider>
</template>
