<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <v-app>
    <TheHeader></TheHeader>
    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Drawer left"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-main>
      <v-parallax src="/src/assets/parallax.jpg">
        <RouterView></RouterView>
      </v-parallax>
    </v-main>
  </v-app>
</template>
