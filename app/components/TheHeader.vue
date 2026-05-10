<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{
  settings?: Content.SettingsDocument;
}>()

const isOpen = ref(false);
</script>

<template>

  <header class="p-4 md:p-6">
    <nav aria-label="main" class="mx-auto max-w-6xl flex flex-col justify-between py-2 md:flex-row md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="z-50" @click="isOpen = false">
          <the-app-logo />
          <span class="sr-only">{{ settings?.data.site_title }} Accueil</span>
        </NuxtLink>
        <button @click="isOpen = true" class="block md:hidden p-2 text-3xl" :aria-expanded="isOpen">
          <Icon name="ph:list-bold" />
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transistion duration-300 ease-in-out will-change-transform"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
        <button @click="isOpen = false" class="block p-2 text-3xl" :aria-expanded="!isOpen">
          <Icon name="ph:x-bold" />
        </button>
        <the-main-menu :links="settings?.data.navigation" class="grid justify-items-end gap-6" />
      </div>

      <!-- Desktop menu -->
      <the-main-menu :links="settings?.data.navigation" class="hidden md:flex gap-6" />
    </nav>
  </header>
</template>
