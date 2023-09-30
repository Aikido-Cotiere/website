<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link: any;
    isFirst?: boolean;
  }>(),
  {
    isFirst: true,
  }
);
</script>
<template>
  <v-list-item
    class="w-100"
    variant="plain"
    :to="props.link.link.linktype == 'story' ? '/' + props.link.link.cached_url : undefined"
    :href="props.link.link.linktype == 'url' ? props.link.link.url : undefined"
  >
    <span v-if="!props.link.children || props.link.children.length == 0">{{ props.link.name }}</span>

    <v-menu v-else open-on-hover open-on-click :open-delay="0" location="end top">
      <template v-slot:activator="{ props }">
        <div v-bind="props">
          <span>{{ link.name }}</span>
          <v-icon icon="mdi-menu-down"></v-icon>
        </div>
      </template>

      <v-list>
        <TheMenuList v-for="(child, childIndex) in props.link.children" :key="childIndex" :link="child"></TheMenuList>
      </v-list>
    </v-menu>
  </v-list-item>
</template>

<style scoped>
.wrap {
  white-space: inherit;
}
</style>
