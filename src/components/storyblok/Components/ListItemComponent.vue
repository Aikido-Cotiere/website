<script setup lang="ts">
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps<{
  blok: Object | any;
}>();
const title = computed(() => renderRichText(props.blok.title));
const subtitle = computed(() => renderRichText(props.blok.subtitle));
const text = computed(() => renderRichText(props.blok.text));
</script>
<template>
  <v-list-item prepend-icon="mdi-circle-small">
    <v-list-item-title><span v-html="title"></span></v-list-item-title>
    <v-list-item-subtitle><span v-html="subtitle"></span></v-list-item-subtitle>
    <div v-html="text"></div>
  </v-list-item>
</template>
