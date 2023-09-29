<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title class="d-flex justify-center font-weight-bold">{{ props.blok.number }}</v-card-title>
    <v-card-subtitle class="d-flex justify-center font-weight-bold">{{ props.blok.title }}</v-card-subtitle>
    <v-card-text class="d-flex justify-center flex-column">
      <v-list v-if="props.blok.details.length > 0" density="compact" class="bg-transparent text-center text-caption">
        <StoryblokComponent v-for="inblok in props.blok.details" :blok="inblok" :key="inblok._uid" />
      </v-list>
    </v-card-text>
  </v-card>
  <v-divider inset v-if="props.blok.showDivider" class="w-50 text-center mx-auto"></v-divider>
</template>
