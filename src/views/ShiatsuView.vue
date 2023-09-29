<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('shiatsu', { version: 'draft' });
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
