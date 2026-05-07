<template>
  <v-list-item class="align-center justify-center text-center" mdc-unwrap="p">
    <v-list-item-title v-if="$slots.title" class="text-center text-h6 font-weight-bold">
      <slot name="title" />
    </v-list-item-title>
    <v-list-item-subtitle v-if="$slots.subtitle" class="text-center font-weight-bold">
      <slot name="subtitle" />
    </v-list-item-subtitle>
    <div v-if="$slots.default" class="align-center justify-center text-caption text-center">
      <slot />
    </div>
  </v-list-item>
  <v-divider width="50%" class="mx-auto" />
</template>

<script lang="ts" setup></script>

<style></style>
