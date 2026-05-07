<template>
  <iframe
    :width="mobile ? '100%' : props.width"
    :height="props.height"
    :src="props.url"
    :title="props.title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const props = defineProps<{
  url: string;
  title: string;
  width?: number;
  height?: number;
}>();
</script>

<style></style>
