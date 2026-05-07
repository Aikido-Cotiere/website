<template>
  <v-list-item class="my-5 align-center justify-center text-center">
    <v-list-item-title v-if="$slots.title" class="text-center text-title-large font-weight-bold mb-2">
      <slot name="title" mdc-unwrap="p" />
    </v-list-item-title>
    <v-list-item-subtitle v-if="$slots.subtitle" class="text-center text-title-medium font-weight-bold">
      <slot name="subtitle" mdc-unwrap="p" />
    </v-list-item-subtitle>
    <div v-if="$slots.default" class="mt-5 align-center justify-center text-body-medium text-center text-disabled">
      <slot mdc-unwrap="p" />
    </div>
  </v-list-item>
  <v-divider width="50%" class="mx-auto border-opacity-75" />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>

.blur {
  backdrop-filter: blur(30px);
  border-radius: 10px;
}
</style>

