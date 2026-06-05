<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("contact", () =>
	prismic.client.getSingle("contact"),
);
useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogTitle: page.value?.data.meta_title,
  ogDescription: page.value?.data.meta_description,
  ogImage: page.value?.data.meta_image.url,
});
</script>

<template>
	<main>
		<SliceZone :slices="page?.data.slices ?? []" :components="components" />
	</main>
</template>