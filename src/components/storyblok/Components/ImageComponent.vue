<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>
<template>
  <v-img v-if="props.blok.image" :src="props.blok.image.filename"></v-img>
</template>
