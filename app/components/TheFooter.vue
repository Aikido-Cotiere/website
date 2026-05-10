<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{
  settings?: Content.SettingsDocument;
}>()

</script>

<template>

  <footer class="">
    <nav aria-label="main" class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row border-t border-gray-600">
      <NuxtLink to="/" class="z-50">
        <the-app-logo />
        <span class="sr-only">{{ settings?.data.site_title }} Accueil</span>
      </NuxtLink>

      <ul class="flex gap-6">
        <li v-for="link in settings?.data.navigation" :key="link.key" class="">
          <PrismicLink :field="link"
            class="inline-flex items-center min-h-11" />
        </li>
      </ul>
    </nav>
  </footer>
</template>
