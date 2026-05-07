<!-- eslint-disable vue/no-v-html -->
<template>
  <v-list-item class="py-3">
    <template v-slot:prepend v-if="props.displayBullet">
      <span class="text-red mr-5">&bull;</span>
    </template>
    <v-list-item-title class="py-0 mb-1 font-weight-bold title" v-if="$slots.title">
      <slot name="title" mdc-unwrap="p" />
    </v-list-item-title>
    <v-list-item-subtitle class="font-italic mb-2" v-if="$slots.subtitle">
      <slot name="subtitle" mdc-unwrap="p" />
    </v-list-item-subtitle>
    <v-list-item-subtitle class="opacity-100" v-if="$slots.subtitle">
      <div class="text-caption">
        <slot mdc-unwrap="p" />
      </div>
    </v-list-item-subtitle>
  </v-list-item>
</template>

<script lang="ts" setup>
const props = defineProps<{
  displayBullet?: boolean;
}>();
</script>

<style lang="scss" scoped>
.title {
  line-height: normal;
}
</style>
