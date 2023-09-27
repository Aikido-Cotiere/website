<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
</script>
<template>
  <standard-page title="Contexte COVID">
    <p>En raison du contexte sanitaire, le montant de l'adhésion annuelle sera égal à</p>
    <v-list density="compact" class="bg-transparent">
      <v-list-item><span class="font-weight-bold">40€</span> pour un enfant de 8 à 13 ans</v-list-item>
      <v-list-item><span class="font-weight-bold">100€</span> pour un adulte ou adolescent à partir de 14 ans</v-list-item>
    </v-list>
  </standard-page>
</template>
