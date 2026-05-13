<script setup lang="ts">
import { useScroll } from "@vueuse/core";
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("focuses", route.params.uid as string),
);

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogTitle: page.value?.data.meta_title,
  ogDescription: page.value?.data.meta_description,
  ogImage: page.value?.data.meta_image.url,
});

const { y } = useScroll(window)

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

watch(y, (newY) => {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;

  if (newY > 300) {
    btn.classList.remove("!hidden");
  } else {
    btn.classList.add("!hidden");
  }
});

</script>

<template>
  <main ref="el">
    <button type="button"
      class="!fixed bottom-5 end-5 button-variant py-4 px-4 h-10 w-10 !hidden"
      id="btn-back-to-top" @click="scrollToTop">
      <Icon name="ph:arrow-up-bold" class="w-10 h-10" />
    </button>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>