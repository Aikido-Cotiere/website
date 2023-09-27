<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import parralax from '/img/parallax.jpg';
</script>

<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main>
      <v-parallax :src="parralax">
        <RouterView></RouterView>
      </v-parallax>
    </v-main>
  </v-app>
</template>
