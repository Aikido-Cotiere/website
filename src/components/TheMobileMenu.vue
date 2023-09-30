<script setup lang="ts">
import type { Link } from '@/App.vue';
import { computed } from 'vue';
import TheListLink from '@/components/TheListLink.vue';

const props = defineProps<{
  links: Link[];
  modelValue: boolean;
}>();
const emits = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const model = computed<boolean>({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emits('update:modelValue', value);
  },
});
</script>

<template>
  <span>{{ model }}</span>
  <v-navigation-drawer v-model="model" fixed width="100%">
    <v-app-bar-nav-icon variant="text" @click.stop="emits('update:modelValue', !props.modelValue)"></v-app-bar-nav-icon>
    <span>AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
    <v-list select-strategy="independent">
      <the-list-link v-for="(link, parentIndex) in props.links" :key="parentIndex" :link="link"> </the-list-link>
    </v-list>
  </v-navigation-drawer>
</template>
