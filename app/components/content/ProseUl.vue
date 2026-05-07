<template>
  <v-list v-bind="props" density="compact" class="bg-transparent">
    <slot />
  </v-list>
</template>
<script setup lang="ts">
import type { VList } from 'vuetify/components';

const props = defineProps<{
  dense?: boolean;
  twoLine?: boolean;
  threeLine?: boolean;
  rounded?: boolean;
  color?: string;
  variant?: 'plain' | 'tonal' | 'outlined' | 'elevated';
  density?: 'default' | 'comfortable' | 'compact';
  class?: string;
  style?: string;
}>();
</script>
