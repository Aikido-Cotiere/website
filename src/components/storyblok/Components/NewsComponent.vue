<script setup lang="ts">
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps<{
  blok: Object | any;
}>();
const content = computed(() => renderRichText(props.blok.content));
const formattedDate = computed(() =>
  new Date(props.blok.created_date).toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
</script>

<template>
  <v-card variant="flat" class="bg-transparent my-5">
    <v-card-title class="font-weight-bold allowWrap">{{ props.blok.title }}</v-card-title>
    <v-card-subtitle class="text-h5 allowWrap">{{ props.blok.subtitle }}</v-card-subtitle>
    <v-card-text>
      <div v-html="content"></div>
      <v-img v-if="props.blok.image" :src="props.blok.image.filename" :width="props.blok.image_width" :height="props.blok.image_height"></v-img>
      <div v-editable="blok" class="px-md-6">
        <StoryblokComponent v-for="inblok in props.blok.body" :blok="inblok" :key="inblok._uid" />
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <div class="mx-2">
        Créée le {{ formattedDate }} <span v-if="props.blok.author">par {{ props.blok.author }}</span>
      </div>
    </v-card-actions>
    <v-divider inset class="my-4"></v-divider>
  </v-card>
</template>

<style scoped>
.allowWrap {
  white-space: inherit;
}
</style>
