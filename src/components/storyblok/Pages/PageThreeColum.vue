<script setup lang="ts">
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps<{
  blok: Object | any;
}>();
const content_top = computed(() => renderRichText(props.blok.content_top));
const content_bottom = computed(() => renderRichText(props.blok.content_bottom));
const content_right = computed(() => renderRichText(props.blok.content_right));
const content_middle = computed(() => renderRichText(props.blok.content_middle));
const content_left = computed(() => renderRichText(props.blok.content_left));
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title>{{ props.blok.title }}</v-card-title>
    <v-card-subtitle>{{ props.blok.sub_title }}</v-card-subtitle>
    <v-card-text>
      <v-row v-if="content_top || props.blok.image_top || props.blok.children_top">
        <v-col cols="12">
          <div class="text-body-1" v-html="content_top"></div>
          <v-img v-if="props.blok.image_top" :src="props.blok.image_top.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in props.blok.children_top" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6" lg="4" class="d-none d-md-flex">
          <div class="text-body-1" v-html="content_left"></div>
          <v-img v-if="props.blok.image_left" :src="props.blok.image_left.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in blok.children_left" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
        <v-col cols="12" md="12" lg="4">
          <div class="text-body-1" v-html="content_middle"></div>
          <v-img v-if="props.blok.image_middle" :src="props.blok.image_middle.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in blok.children_middle" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
        <v-col md="6" lg="4" class="d-none d-md-flex">
          <div class="text-body-1" v-html="content_right"></div>
          <v-img v-if="props.blok.image_right" :src="props.blok.image_right.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in blok.children_right" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
      </v-row>
      <v-row v-if="content_bottom || props.blok.image_bottom || props.blok.children_bottom">
        <v-col cols="12">
          <div class="text-body-1" v-html="content_bottom"></div>
          <v-img v-if="props.blok.image_bottom" :src="props.blok.image_bottom.filename"></v-img>
          <div v-editable="blok" class="px-6">
            <StoryblokComponent v-for="inblok in props.blok.children_bottom" :blok="inblok" :key="inblok._uid" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
