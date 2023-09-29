<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>
<template>
  <iframe
    :width="props.blok.width"
    :height="props.blok.height"
    :src="props.blok.url.url"
    :title="props.blok.title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
