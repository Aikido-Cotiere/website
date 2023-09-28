<script setup lang="ts">
import { computed } from 'vue'
import { renderRichText } from "@storyblok/vue";

const props = defineProps<{
    blok: Object | any
}>()
const content = computed(() => renderRichText(props.blok.content));

</script>
 
<template>
    <v-card variant="flat" class="bg-transparent my-5">
        <v-card-title class="text-h3 font-weight-bold">{{ props.blok.title }}</v-card-title>
        <v-card-text>
            <div v-html="content"></div>
            <v-img v-if="props.blok.image" :src="props.blok.image.filename"></v-img>
            <div v-editable="blok" class="px-6">
                <StoryblokComponent v-for="inblok in props.blok.body" :blok="inblok" :key="inblok._uid" />
            </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
            <div class="mx-2">Créée le {{ props.blok.created_date }} par {{ props.blok.author }}</div>
        </v-card-actions>
        <v-divider inset class="my-4"></v-divider>
    </v-card>
</template>