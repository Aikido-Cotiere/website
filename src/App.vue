<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheMobileMenu from '@/components/TheMobileMenu.vue';
import parralax from '/img/parallax.jpg';
import { useDisplay } from 'vuetify';

const openMobile = ref<boolean>(false);
const { mobile } = useDisplay();
</script>

<template>
  <v-app>
    <Suspense>
      <template #default>
        <the-mobile-menu v-if="mobile" v-model="openMobile"></the-mobile-menu>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>

    <the-header v-model="openMobile"></the-header>
    <v-main>
      <v-parallax :src="parralax">
        <Suspense>
          <template #default>
            <RouterView :key="$route.path"></RouterView>
          </template>
          <template #fallback> Loading... </template>
        </Suspense>
      </v-parallax>
    </v-main>
  </v-app>
</template>
