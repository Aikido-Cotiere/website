<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  date?: Date;
}>();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
const formattedDate = computed(() => {
  if (props.date) {
    return props.date.toLocaleDateString('fr-FR', options);
  }
  return '';
});
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title> {{ props.title }} </v-card-title>
    <v-card-text>
      <slot></slot>
      <p v-if="props.date">Mis à jour ({{ formattedDate }})</p>
    </v-card-text>
  </v-card>
</template>
