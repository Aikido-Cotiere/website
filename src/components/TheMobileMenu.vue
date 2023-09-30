<script setup lang="ts">
import { computed } from 'vue';
import TheListLink from '@/components/TheListLink.vue';
import type { ISbStoriesParams } from '@storyblok/vue';
import { useStoryblok } from '@storyblok/vue';
import Banner from '/img/Image_logo_ATC.gif';

const props = defineProps<{
  modelValue: boolean;
}>();
const emits = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const model = computed<boolean>({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emits('update:modelValue', value);
  },
});
let option: ISbStoriesParams | undefined = {
  version: 'draft',
};
if (process.env.NODE_ENV == 'production') {
  option = undefined;
}
const storyBlokMenu = await useStoryblok('global_menu', option);
</script>

<template>
  <v-navigation-drawer v-model="model" fixed class="bg-white forceMaxWidth" width="100%" floating>
    <template #image>
      <div class="d-flex h-100 align-center">
        <v-img :src="Banner" cover></v-img>
      </div>
    </template>
    <!-- <v-app-bar-nav-icon variant="text" @click.stop="emits('update:modelValue', !props.modelValue)"></v-app-bar-nav-icon>
    <span>AÏKIDO TRADITIONNEL DE LA CÔTIERE</span> -->
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
