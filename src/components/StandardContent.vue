<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    subContent?: boolean;
    bordered?: boolean;
  }>(),
  {
    title: '',
    subContent: false,
    bordered: false,
  }
);
</script>

<template>
  <v-card :variant="bordered ? 'outlined' : 'flat'" class="bg-transparent">
    <v-card-title :class="{ 'text-subtitle-1': props.subContent }"> {{ props.title }} </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
