<script setup lang="ts">
import { computed } from 'vue'
import { renderRichText } from "@storyblok/vue";

const props = defineProps<{
    blok: Object | any
}>()
const caption = computed(() => renderRichText(props.blok.caption));

</script>
 
<template>
    <v-card>
        <v-card-title>{{ props.blok.title }}</v-card-title>
        <v-card-text>
            <v-row>
                <v-col :cols="props.blok.droite_text ? 6 : 12">
                    <div v-html="caption"></div>


                    <div v-editable="blok" class="px-6">
                        <StoryblokComponent v-for="inblok in blok.other" :blok="inblok" :key="inblok._uid" />
                    </div>
                </v-col>
                <v-col v-if="props.blok.droite_text">
                    <div v-editable="blok" class="px-6">
                        <StoryblokComponent v-for="inblok in blok.second_block" :blok="inblok" :key="inblok._uid" />
                    </div>
                    {{ props.blok.droite_text }}
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>