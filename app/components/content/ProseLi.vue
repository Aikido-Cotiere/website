<template>
  <v-list-item prepend-icon="i-mdi-dot" v-bind="props">
    <slot />
  </v-list-item>
</template>
<script setup lang="ts">
import type { VListItem } from 'vuetify/components';

const props = defineProps<{
  active?: boolean;
  disabled?: boolean;
  color?: string;
  variant?: 'plain' | 'tonal' | 'outlined' | 'elevated';
  density?: 'default' | 'comfortable' | 'compact';
  class?: string;
  style?: string;
}>();
</script>
