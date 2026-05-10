<script lang="ts" setup>
const primic = usePrismic();

const { data: settings } = await useAsyncData("settings", () =>
  primic.client.getSingle("settings"),
);

useSeoMeta({
  title: settings.value?.data.site_title,
  description: settings.value?.data.site_description,
  ogTitle: settings.value?.data.site_title,
  ogDescription: settings.value?.data.site_description,
  ogImage: settings.value?.data.site_image.url,
});
</script>

<template>
  <the-header :settings="settings" />
  <slot />
  <the-footer :settings="settings" />
</template>
