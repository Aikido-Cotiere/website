<script setup lang="ts">
import { useStoryblok, type ISbStoriesParams } from '@storyblok/vue';
import { computed } from 'vue';

const props = defineProps<{
  story: string;
}>();

let option: ISbStoriesParams | undefined = {
  version: 'draft',
};
if (process.env.NODE_ENV == 'production') {
  option = undefined;
}

const slug = computed(() => {
  return props.story.substring(1, props.story.length);
});
const storyBlok = await useStoryblok(slug.value, option);
</script>

<template>
  <StoryblokComponent v-if="storyBlok && storyBlok.content" :blok="storyBlok.content" />
  <div v-else>Loading</div>
</template>
