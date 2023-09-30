<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('aikido/porterhakama', { version: 'draft' });
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
