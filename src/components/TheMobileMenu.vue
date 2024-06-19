<script setup lang="ts">
import TheListLink from '@/components/TheListLink.vue';
import type { ISbStoriesParams } from '@storyblok/vue';
import { useStoryblok } from '@storyblok/vue';

const model = defineModel<boolean>();
let option: ISbStoriesParams | undefined = {
  version: 'draft',
};
if (process.env.NODE_ENV == 'production') {
  option = undefined;
}
const storyBlokMenu = await useStoryblok('global_menu', option);
</script>

<template>
  <v-navigation-drawer v-model="model" class="bg-white" floating>
    <v-app-bar-nav-icon variant="text" @click="model = false"></v-app-bar-nav-icon>
    <v-list :lines="false">
      <the-list-link v-for="(link, parentIndex) in storyBlokMenu.content.liens" :key="parentIndex" :link="link"> </the-list-link>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.forceMaxWidth {
  width: 100% !important;
}
</style>
