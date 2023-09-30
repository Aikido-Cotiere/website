<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>
<template>
  <v-list-subheader>{{ props.blok.text }}</v-list-subheader>
</template>
