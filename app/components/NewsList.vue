<script setup lang="ts">
const { data: news } = await useAsyncData(() => queryCollection('news').all());

const ordererNews = computed(() => {
  const temp = [...(news.value || [])];
  return temp?.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
});
</script>

<template>
  <v-container>
    <news-details v-for="item in ordererNews" :key="item.id" :news="item" />
  </v-container>
</template>
