<template>
  <v-card variant="flat" class="bg-transparent">
    <iframe :src="props.link" width="100%" height="500px" style="border: 0" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: string;
}>();
</script>

<style></style>
