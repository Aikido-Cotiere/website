<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('aikido/equipement', { version: 'draft' });
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
