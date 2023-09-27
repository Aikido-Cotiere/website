<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: '',
  }
);
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title> {{ props.title }} </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
