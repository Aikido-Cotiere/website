<script setup lang="ts">
import type { Content } from "@prismicio/client";
import EmphasisText from "~/components/EmphasisText.vue";
import TitleText from "~/components/TitleText.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
	getSliceComponentProps<Content.BentoSlice>([
		"slice",
		"index",
		"slices",
		"context",
	]),
);
</script>

<template>
	<the-bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<PrismicRichText :field="slice.primary.title" :components="{ em: EmphasisText, heading2: TitleText }" />
		<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
			<PrismicRichText :field="slice.primary.body" />
		</div>
		<div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
			<article v-for="(box, i) in slice.primary.bento" :key="i"
				class="glassy-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gray-950/60 p-4 before:bg-gray-100/10"
				:class="box.is_wide ? 'md:col-span-2' : 'md:col-span-1'">
				<h3 class="text-2xl">
					<PrismicText :field="box.title" />
				</h3>
				<div class="max-w-md text-balance text-gray-300">
					<PrismicRichText :field="box.body" />
				</div>
				<PrismicImage :field="box.image" class="max-h-36 w-full object-cover" />
			</article>
		</div>
	</the-bounded>
</template>