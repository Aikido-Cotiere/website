<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () => queryCollection('pages').path(route.path).first());

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <v-container>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>
      <p>Chargement en cours</p>
    </div>
  </v-container>
</template>
