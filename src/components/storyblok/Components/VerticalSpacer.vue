<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  blok: Object | any;
}>();

const marginClass = computed(() => `my-${props.blok.margin}`);
</script>

<template>
  <div :class="marginClass"></div>
</template>
