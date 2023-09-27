<script setup lang="ts">
const props = defineProps<{
  words: { word: string; meaning: string }[];
}>();
</script>
<template>
  <v-table density="compact" class="bg-transparent">
    <thead>
      <tr>
        <th class="text-left">Mot japonais</th>
        <th class="text-left">Sens français</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="word in props.words" :key="word.word">
        <td>{{ word.word }}</td>
        <td>{{ word.meaning }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
