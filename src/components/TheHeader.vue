<script setup lang="ts">
import TheWebMenu from '@/components/TheWebMenu.vue';
import Banner from '/img/main-banner.jpg';
import type { Link } from '@/App.vue';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const props = defineProps<{
  links: Link[];
  modelValue: boolean;
}>();
const emits = defineEmits<{
  'update:modelValue': [value: boolean];
}>();
</script>
<template>
  <v-app-bar scroll-behavior="elevate" :height="mobile ? '' : 150" :border="true" title="AÏKIDO TRADITIONNEL DE LA CÔTIERE">
    <template #image>
      <v-img v-if="!mobile" :src="Banner" cover :width="mobile ? '120px' : ''"></v-img>
    </template>
    <template #title>
      <v-app-bar-title v-if="!mobile" :class="{ 'd-flex justify-center text-white text-wrap': !mobile }">AÏKIDO TRADITIONNEL DE LA CÔTIERE</v-app-bar-title>
    </template>
    <template #extension>
      <the-web-menu v-if="!mobile" :links="props.links"></the-web-menu>
      <template v-else>
        <v-app-bar-nav-icon class="justify-end" variant="text" @click.stop="emits('update:modelValue', !props.modelValue)"></v-app-bar-nav-icon>
        <span class="w-100 d-flex justify-center">AÏKIDO TRADITIONNEL DE LA CÔTIERE</span>
      </template>
    </template>
  </v-app-bar>
</template>

<style scoped>
.text-wrap {
  white-space: inherit;
}
</style>
