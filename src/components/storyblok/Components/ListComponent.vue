<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>
<template>
  <v-list density="compact" class="bg-transparent">
    <StoryblokComponent v-for="inblok in props.blok.items" :blok="inblok" :key="inblok._uid" />
  </v-list>
</template>
