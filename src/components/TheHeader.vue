<script setup lang="ts">
import TheMenu from '@/components/TheMenu.vue';
import Banner from '/img/main-banner.jpg';
</script>
<template>
  <v-app-bar scroll-behavior="elevate" :image="Banner" height="150" :border="true">
    <template #title>
      <span class="d-flex justify-center text-white">AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
    </template>
    <template #extension>
      <the-menu></the-menu>
    </template>
  </v-app-bar>
</template>
