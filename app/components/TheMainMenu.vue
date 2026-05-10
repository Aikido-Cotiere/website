
<script lang="ts" setup>
import type { Content } from "@prismicio/client";

defineProps<{
  links?: Content.SettingsDocument.NavigationLink[];
}>()
</script>

<template>
     <ul >
        <li v-for="link in links" :key="link.key" class="">
          <PrismicLink 
            :field="link" 
            :class="{ 'button-variant': link.variant == 'Bouton' }" 
            class="block min-h-11 px-3 text-3xl first:mt-8 md:inline-flex md:items-center md:px-unset md:text-base md:first:mt-0"
          />
        </li>
      </ul>
</template>


<style>

</style>