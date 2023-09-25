<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>
