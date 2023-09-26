<script setup lang="ts">
import TheMenu from '@/components/TheMenu.vue';
</script>
<template>
  <v-app-bar scroll-behavior="elevate" height="150" :border="true">
    <template v-slot:image>
      <v-img cover src="/src/assets/main-banner.jpg"></v-img>
    </template>
    <template v-slot:title>
      <span class="d-flex justify-center text-white">AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
    </template>
    <template v-slot:extension>
      <the-menu></the-menu>
    </template>
  </v-app-bar>
</template>
