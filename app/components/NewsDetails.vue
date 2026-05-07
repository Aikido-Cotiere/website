<template>
  <v-card variant="outlined" class="mb-2">
    <v-card-title class="text-h6 text-wrap">{{ props.news.title }}</v-card-title>
    <v-card-subtitle>{{ format(props.news.date, 'dd MMM yyyy', { locale: fr }) }}</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col v-if="props.news.image" cols="3">
          <v-img :src="props.news.image" position="top" />
        </v-col>
        <v-col>
          <ContentRenderer v-if="props.news" :value="props.news" mdc-unwrap="p" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

import type { NewsCollectionItem } from '@nuxt/content';

const props = defineProps<{
  news: NewsCollectionItem;
}>();
</script>

<style></style>
