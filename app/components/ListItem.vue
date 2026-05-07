<!-- eslint-disable vue/no-v-html -->
<template>
  <v-list-item :prepend-icon="props.displayBullet ? 'mdi-circle-small' : ''">
    <v-list-item-title v-if="$slots.title">
      <slot name="title" />
    </v-list-item-title>
    <v-list-item-subtitle v-if="$slots.subtitle">
      <slot name="subtitle" />
    </v-list-item-subtitle>
    <div class="text-caption">
      <slot mdc-unwrap="p" />
    </div>
  </v-list-item>
</template>

<script lang="ts" setup>
const props = defineProps<{
  displayBullet?: boolean;
}>();
</script>

<style></style>
