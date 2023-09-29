<script setup lang="ts">
import type { Link } from '../App.vue';

const props = defineProps<{
  link: Link;
}>();
</script>
<template>
  <v-list-item>
    <v-list-item-title>
      <v-btn class="wrap" variant="text" :to="props.link.link" :href="props.link.href">{{ props.link.name }}</v-btn>
    </v-list-item-title>
    <template v-if="props.link.children">
      <v-list select-strategy="independent">
        <TheListLink v-for="(child, childIndex) in props.link.children" :key="childIndex" :link="child"> </TheListLink>
      </v-list>
    </template>
  </v-list-item>
</template>

<style scoped>
.wrap {
  white-space: inherit;
}
</style>
