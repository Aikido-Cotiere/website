<script setup lang="ts">
import type { Content } from "@prismicio/client";
import EmphasisText from "~/components/EmphasisText.vue";
import TitleText from "~/components/TitleText.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(getSliceComponentProps<Content.FocusContentSlice>(
	["slice", "index", "slices", "context"]
));

</script>

<template>

	<hr v-if="index > 0" class="border-t border-gray-600 m-0 p-0 inset-3 md:mx-96" />
	<the-bounded :id="slice.primary.anchor" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation"
		class="first:!py-0">
		<header v-if="$prismic.isFilled.richText(slice.primary.title)"
			class="focus__heading text-balance text-center text-5xl font-medium md:text-7xl">
			<PrismicRichText :field="slice.primary.title" :components="{ em: EmphasisText, heading2: TitleText }" />
		</header>

		<div v-if="$prismic.isFilled.richText(slice.primary.sub_title)"
			class="focus__heading text-balance text-center text-2xl font-medium md:text-3xl">
			<PrismicRichText :field="slice.primary.sub_title" :components="{ em: EmphasisText, heading3: TitleText }" />
		</div>

		<div v-if="$prismic.isFilled.richText(slice.primary.content)"
			class="prose mt-6 text-balance text-justify md:text-xl text-gray-300">
			<PrismicRichText :field="slice.primary.content" />
		</div>

		<div class="relative pt-6" v-if="$prismic.isFilled.image(slice.primary.image)">
			<div class="image-glow -bottom-8 -left-4 bg-sky-500"></div>
			<div class="image-glow -right-4 -top-8 bg-teal-500"></div>
			<PrismicImage :field="slice.primary.image"
				class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100">
			</PrismicImage>
		</div>

		<ul class="py-9 flex gap-4 flex-wrap" v-if="slice.primary.liens && slice.primary.liens.length > 0">
			<li v-for="link in slice.primary.liens" :key="link.key" class="">
				<NuxtLink :to="(link as unknown as { url: string }).url" :field="link" :class="{
					'button-variant': link.variant == 'Bouton',
					'hover:underline text-teal-500': link.variant != 'Bouton'
				}" class="block min-h-11 px-3 text-3xl first:mt-8 md:inline-flex md:items-center md:px-unset md:text-base md:first:mt-0">
					{{ link.text }}
				</NuxtLink>
			</li>
		</ul>

		<div v-if="slice.primary.iframe" v-html="slice.primary.iframe"
			class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100 aspect-video">
		</div>

		<div class="mt-20 grid gap-16">
			<div v-for="(detail, index) in slice.primary.details" :key="index"
				class="group relative grid opacity-85 transition-opacity duration-300 hover:opacity-100 md:grid-cols-2 lg:grid-cols-3"
				:class="{ 'gap-4 md:gap-8 ': $prismic.isFilled.image(detail.content_image) }">
				<div class="flex flex-col justify-center" :class="{
					'gap-4': $prismic.isFilled.image(detail.content_image),
					'col-span-1': $prismic.isFilled.image(detail.content_image),
					'col-span-2': !$prismic.isFilled.image(detail.content_image)
				}">
					<h3 class="text-4xl" :class="{ 'text-right': index % 2 }">
						<PrismicRichText :field="detail.content_title"
							:components="{ em: EmphasisText, heading2: TitleText }" />
					</h3>
					<div class="max-w-md lg:max-w-xl md:text-xl lg:text-2xl" :class="{ 'text-right': index % 2 }">
						<PrismicRichText :field="detail.content_punchline"
							:components="{ em: EmphasisText, heading3: TitleText }" />
					</div>
					<div class="max-w-md lg:max-w-xl" :class="{ 'text-right': index % 2 }">
						<PrismicRichText :field="detail.content_body" />
					</div>
					<ul class="py-9 flex gap-4 flex-wrap" v-if="detail.content_link && detail.content_link.length > 0">
						<li v-for="link in detail.content_link" :key="link.key" class="">
							<NuxtLink :to="(link as unknown as { url: string }).url" :field="link" :class="{
								'button-variant': link.variant == 'Bouton',
								'hover:underline text-teal-500': link.variant != 'Bouton'
							}" class="block min-h-11 px-3 text-3xl first:mt-8 md:inline-flex md:items-center md:px-unset md:text-base md:first:mt-0">
								{{ link.text }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="relative" :class="{
					'md:-order-1': index % 2,
					'lg:col-span-2': $prismic.isFilled.image(detail.content_image),
					'lg:col-span-1': !$prismic.isFilled.image(detail.content_image)
				}" v-if="detail.content_image">
					<div class="image-glow -bottom-8 -left-4 bg-sky-500"></div>
					<div class="image-glow -right-4 -top-8 bg-teal-500"></div>
					<PrismicImage :field="detail.content_image"
						class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100">
					</PrismicImage>
				</div>
			</div>
		</div>
	</the-bounded>
</template>