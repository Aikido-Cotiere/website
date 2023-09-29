<script setup lang="ts">
import { useDisplay } from 'vuetify';

const props = defineProps<{
  blok: Object | any;
}>();
const { mobile } = useDisplay();
</script>
<template>
  <iframe
    :width="mobile ? '100%' : props.blok.width"
    :height="props.blok.height"
    :src="props.blok.url.url"
    :title="props.blok.title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
