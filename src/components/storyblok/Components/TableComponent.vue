<script setup lang="ts">
const props = defineProps<{
  blok: Object | any;
}>();
</script>
<template>
  <v-table density="compact" class="bg-transparent">
    <thead>
      <tr>
        <th class="text-left" v-for="(th, thIndex) in props.blok.content.thead" :key="thIndex">{{ th.value }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, trIndex) in props.blok.content.tbody" :key="trIndex">
        <td v-for="(td, tdIndex) in tr.body" :key="tdIndex">{{ td.value }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
