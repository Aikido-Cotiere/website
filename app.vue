<template>
  <v-app full-height>
    <v-navigation-drawer
      v-model="drawer"
      :disable-resize-watcher="true"
      :location="safeMobile ? 'bottom' : 'left'"
      :temporary="safeMobile"
      :permanent="!safeMobile"
      :expand-on-hover="!safeMobile"
      :rail="!safeMobile"
      :rail-width="safeMobile ? undefined : 70"
      class="bg-white"
    >
      <the-global-menu />
    </v-navigation-drawer>

    <v-app-bar color="red-darken-4" lazy-img="/main-banner.jpg" scroll-behavior="hide" class="bg-white">
      <template #title>
        <v-app-bar-title class="d-flex justify-center">
          <span class="text-wrap" :class="{ 'text-white': !safeMobile }">AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
        </v-app-bar-title>
      </template>
      <template #prepend>
        <v-img width="50" src="/main-logo.jpg" to="/" />
      </template>
      <template #append>
        <v-app-bar-nav-icon v-if="safeMobile" color="white" variant="text" @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>

    <v-main>
      <v-parallax src="/parallax.jpg">
        <v-container fluid>
          <NuxtPage />
        </v-container>
      </v-parallax>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const drawer = ref(true);
const safeMobile = ref(false);

watch(mobile, (value) => {
  if (value) {
    drawer.value = false; // Close drawer on mobile
    safeMobile.value = true; // Set safeMobile to true when on mobile
  } else {
    drawer.value = true; // Open drawer on desktop
    safeMobile.value = false; // Set safeMobile to false when not on mobile
  }
});
</script>
