<script setup lang="ts">
import { type ISbStoriesParams, useStoryblok } from '@storyblok/vue';
import TheMenuList from '@/components/TheMenuList.vue';

let option: ISbStoriesParams | undefined = {
  version: 'draft',
};
if (process.env.NODE_ENV == 'production') {
  option = undefined;
}
const storyBlokMenu = await useStoryblok('global_menu', option);
</script>

<template>
  <v-tabs align-tabs="center" grow bg-color="grey-lighten-5" show-arrows>
    <v-tab
      v-for="(link, parentIndex) in storyBlokMenu.content.liens"
      :key="parentIndex"
      :to="link.link.linktype == 'story' ? '/' + link.link.cached_url : undefined"
      :href="link.link.linktype == 'url' ? link.link.url : undefined"
    >
      <span class="align-self-stretch" v-if="!link.children || link.children.length == 0">{{ link.name }}</span>
      <the-menu-list v-else :link="link" is-first></the-menu-list>
    </v-tab>
  </v-tabs>
</template>
