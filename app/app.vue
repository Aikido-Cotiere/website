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
      :mobile="safeMobile"
    >
      <the-global-menu />
    </v-navigation-drawer>

    <TheHeader :is-mobile="safeMobile" @menu-clicked="drawer = !drawer"></TheHeader>

    <v-main>
      <v-parallax src="/parallax.png">
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
}, {
  immediate: true
});
</script>

<style lang="scss" >

@font-face {
  font-family: "Gang of Three";
  src:
    local("go3v2"),
    url("/go3v2.ttf") format("opentype"),
}
</style>
