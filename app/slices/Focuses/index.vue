<script setup lang="ts">
import type { Content } from "@prismicio/client";

const prismic = usePrismic()
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
    getSliceComponentProps<Content.FocusesSlice>([
        "slice",
        "index",
        "slices",
        "context",
    ]),
);

const focuses = computed(() => {
    return props.slice.primary.focuses
        .map(item => item.link)
        .filter((item) => prismic.isFilled.contentRelationship(item))
})

</script>

<template>
    <the-bounded :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
        <h2 class="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
            <PrismicText :field="slice.primary.title" />
        </h2>

        <div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
            <PrismicRichText :field="slice.primary.body" />
        </div>

        <div class="mt-20 grid gap-16">
            <div v-for="(focus, index) in focuses" :key="focus.id"
                class="group relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <div class="col-span-1 flex flex-col justify-center gap-4">
                    <h3 class="text-4xl">
                        <PrismicText :field="focus.data?.title" />
                    </h3>
                    <div class="max-w-md">
                        <PrismicRichText :field="focus.data?.description" />
                    </div>
                    <PrismicLink :field="focus" class="z-10 after:absolute after:inset-0 hover:underline">
                        En savoir plus sur "<PrismicText :field="focus.data?.title" />"
                    </PrismicLink>
                </div>

                <div class="relative lg:col-span-2" :class="index % 2 ? 'md:-order-1' : ''" v-if="focus.data?.cover">
                    <div class="image-glow -bottom-8 -left-4 bg-sky-500"></div>
                    <div class="image-glow -right-4 -top-8 bg-teal-500"></div>
                    <PrismicImage :field="focus.data?.cover"
                        class="z-20 scale-[.98] rounded-xl transition-transform duration-300 group-hover:scale-100">
                    </PrismicImage>
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