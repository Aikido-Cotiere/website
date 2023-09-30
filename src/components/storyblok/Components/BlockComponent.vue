<script setup lang="ts">
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps<{
  blok: Object | any;
}>();
const content = computed(() => renderRichText(props.blok.content));
</script>

<template>
  <v-card :variant="props.blok.border ? 'outlined' : 'flat'" class="bg-transparent">
    <v-card-title class="allowWrap" :class="{ 'text-subtitle-1': props.blok.isSubComponent }">{{ props.blok.title }}</v-card-title>
    <v-card-subtitle class="allowWrap" v-if="props.blok.sub_title" :class="{ 'text-subtitle-2': props.blok.isSubComponent }">{{ props.blok.sub_title }}</v-card-subtitle>
    <v-card-text>
      <div :class="{ 'd-flex': props.blok.image_aside }">
        <div :class="{ 'text-body-2': props.blok.isSubComponent }" v-html="content"></div>
        <v-img v-if="props.blok.image" :src="props.blok.image.filename" :width="props.blok.image_width" :height="props.blok.image_height"></v-img>
      </div>

      <div v-editable="blok" class="px-md-6">
        <StoryblokComponent v-for="inblok in props.blok.body" :blok="inblok" :key="inblok._uid" />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.allowWrap {
  white-space: inherit;
}
</style>
