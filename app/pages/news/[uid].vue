<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(route.params.uid as string, () =>
	prismic.client.getByUID("news", route.params.uid as string),
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