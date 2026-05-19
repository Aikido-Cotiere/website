<script setup lang="ts">
import type { Content } from "@prismicio/client";
import gsap from "gsap"
import { y } from "vue-router/dist/index-ZwgQvn2r.js";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HeroSlice>(
	["slice", "index", "slices", "context"]
));

onMounted(() => {
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (prefersReducedMotion) {
		gsap.set('.hero__title, .hero__punchline, .hero__button, .hero__image, .hero__glow', {
			opacity: 1
		});
		return;
	}

	const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

	tl.fromTo(".hero__title", { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 })
	tl.fromTo(".hero__punchline", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=0.6")
	tl.fromTo(".hero__ctas", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.3 }, "-=0.8")
	tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
	tl.fromTo(".hero__image", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3 }, "-=0.3")
	tl.fromTo(".hero__glow", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8 }, "-=1")

	gsap.to(".hero__glow--1", {
		repeat: -1, repeatDelay: 0, ease: "power2.inOut", keyframes: [
			{ top: "0%", left: "33%", duration: 0 },
			{ top: "33%", left: "33%", duration: 2 },
			{ top: "33%", left: "0%", duration: 3 },
			{ top: "0%", left: "0%", duration: 2 },
			{ top: "0%", left: "33%", duration: 3 },
		]
	})
	gsap.to(".hero__glow--2", {
		repeat: -1, repeatDelay: 0, ease: "power2.inOut", keyframes: [
			{ top: "33%", left: "0%", duration: 0 },
			{ top: "0%", left: "0%", duration: 2 },
			{ top: "0%", left: "33%", duration: 3 },
			{ top: "33%", left: "33%", duration: 2 },
			{ top: "33%", left: "0%", duration: 3 },
		]
	})
});
</script>

<template>
	<the-bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
		<div class="text-center relative">
			<ying-yang-grid />
			<h1 class="hero__title mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl">
				<PrismicText :field="slice.primary.title" />
			</h1>
			<p class="hero__punchline mx-auto mt-6 max-w-md text-balance text-gray-300 opacity-0">
				<PrismicText :field="slice.primary.punchline" />
			</p>
			<div class="hero__ctas flex flex-wrap gap-8 justify-center">
				<PrismicLink v-for="link in slice.primary.ctas" :key="link.key" :field="link"
					class="hero__button button-variant mt-8 opacity-0" />
			</div>
			<div class="hero__image glassy-container mt-16 w-fit opacity-0">
				<div
					class="hero__glow hero__glow--1 absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-sky-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]">
				</div>
				<div
					class="hero__glow hero__glow--2 absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-teal-600/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]">
				</div>

				<PrismicImage :field="slice.primary.image" class=" rounded-lg" />
			</div>
		</div>
	</the-bounded>
</template>