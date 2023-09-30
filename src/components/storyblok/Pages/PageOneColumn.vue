<script setup lang="ts">
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps<{
  blok: Object | any;
}>();
const content = computed(() => renderRichText(props.blok.content));
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title>{{ props.blok.title }}</v-card-title>
    <v-card-subtitle>{{ props.blok.sub_title }}</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <div class="text-body-1" v-html="content"></div>
          <v-img v-if="props.blok.img" :src="props.blok.image.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in props.blok.children" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
