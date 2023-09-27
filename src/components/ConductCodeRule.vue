<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    number: number;
    title: string;
    details: string[];
    showDivider: boolean;
  }>(),
  {
    number: 0,
    title: '',
    details: () => [],
    showDivider: false,
  }
);
</script>

<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title class="d-flex justify-center font-weight-bold">{{ props.number }}</v-card-title>
    <v-card-subtitle class="d-flex justify-center font-weight-bold">{{ props.title }}</v-card-subtitle>
    <v-card-text class="d-flex justify-center flex-column">
      <v-list v-if="props.details.length > 0" density="compact" class="bg-transparent mx-auto w-50 text-center text-caption">
        <v-list-item v-for="(detail, index) in props.details" :key="index">
          {{ detail }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  <v-divider inset v-if="props.showDivider" class="w-50 text-center mx-auto"></v-divider>
</template>
