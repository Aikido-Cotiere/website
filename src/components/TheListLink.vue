<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link: any;
    level?: number;
  }>(),
  {
    level: 1,
  }
);
</script>
<template>
  <v-list-item class="bright" :to="props.link.link.linktype == 'story' ? '/' + props.link.link.cached_url : undefined" :href="props.link.link.linktype == 'url' ? props.link.link.url : undefined">
    <v-list-item-title>{{ props.link.name }}</v-list-item-title>
  </v-list-item>
  <v-list :class="'ml-' + level" v-if="props.link.children && props.link.children.length > 0" :lines="false" nav>
    <TheListLink v-for="(child, childIndex) in props.link.children" :key="childIndex" :link="child" :level="level + 1"> </TheListLink>
  </v-list>
</template>

<style scoped>
.bright {
  backdrop-filter: brightness(150%);
  text-shadow: 1px 1px #ffffff;
}
</style>
