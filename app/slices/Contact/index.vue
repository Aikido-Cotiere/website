<script setup lang="ts">
import type { Content } from "@prismicio/client";
import EmphasisText from "~/components/EmphasisText.vue";
import TitleText from "~/components/TitleText.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ContactSlice>(
	["slice", "index", "slices", "context"]
));
</script>

<template>
	<hr class="border-t border-gray-600 m-0 p-0" />
	<the-bounded :id="slice.primary.anchor" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<PrismicRichText :field="slice.primary.title" :components="{ em: EmphasisText, heading2: TitleText }" />
		<div class="mt-20 grid gap-16">
			<div
				class=" relative grid gap-4 opacity-85 transition-opacity duration-300 hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

				<div class="group relative lg:col-span-2">
					<div class="image-glow -bottom-8 -left-4 bg-sky-500"></div>
					<div class="image-glow -right-4 -top-8 bg-teal-500"></div>
					<div v-html="slice.primary.iframe_google_maps"
						class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100 ">
					</div>
				</div>
				<div class="col-span-1 flex flex-col justify-center gap-4">
					<div class="max-w-md flex flex-wrap gap-2">
						<span class="text-3xl">Adresse :</span>
						<span class="text-xl"><PrismicText :field="slice.primary.address" /></span>
					</div>
					<div class="max-w-md flex flex-wrap gap-2">
						<span class="text-3xl">Email :</span>
						<NuxtLink class="text-xl text-teal-500 hover:underline" :href="'mailto:' + (slice.primary.email[0] as unknown as { text: string })?.text">
							<PrismicText :field="slice.primary.email" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</the-bounded>
</template>

<style scoped>
.image-glow {
	@apply absolute h-1/2 w-1/2 rounded-full opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30;
}
</style>