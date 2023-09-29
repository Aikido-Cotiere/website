<script setup lang="ts">
import type { Link } from '@/App.vue';

const props = defineProps<{
  links: Link[];
}>();
</script>

<template>
  <v-tabs align-tabs="center" grow bg-color="grey-lighten-5" show-arrows>
    <v-tab v-for="(link, parentIndex) in props.links" :key="parentIndex" :to="link.link" :href="link.href" :exact="link.exact">
      <span v-if="!link.children">{{ link.name }}</span>
      <v-menu v-else open-on-hover open-on-click :open-delay="0">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            <span>{{ link.name }}</span>
            <v-icon icon="mdi-menu-down"></v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item v-for="(child, childIndex) in link.children" :key="childIndex" :to="child.link" :href="child.href" :exact="child.exact">
            <v-list-item-title>
              <span v-if="!child.children">{{ child.name }}</span>
              <v-menu v-else location="end" open-on-hover open-on-click :open-delay="0">
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                    <span>{{ child.name }}</span>
                    <v-icon icon="mdi-menu-down"></v-icon>
                  </div>
                </template>

                <v-list>
                  <v-list-item v-for="(child2, child2Index) in child.children" :key="child2Index" :to="child2.link" :href="child2.href" :exact="child2.exact">
                    <v-list-item-title>{{ child2.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
  </v-tabs>
</template>
