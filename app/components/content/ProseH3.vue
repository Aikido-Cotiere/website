<template>
  <div :id="props.id" class="text-subtitle-1 my-2 font-weight-bold">
    <a v-if="generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1))
);
</script>
