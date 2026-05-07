<script setup lang="ts">
import { ref } from 'vue';

const saison = ref(2025);
</script>

<template>
  <v-card variant="text">
    <span> Pour des informations détaillées sur les horaires, tarifs, etc., consultez le menu "Le Dojo". </span>
    <br />
    <span> Ce formulaire est destiné exclusivement pour les <span class="font-weight-bold text-red">nouveaux pratiquants qui n'ont jamais été inscrits</span> dans notre dojo. </span>
    <br />
    <span>Dans le cas contraire, merci d'utiliser le formulaire de réinscription.</span>
    <br />
    <span
      >Cette inscription est valable pour la saison <span class="font-weight-bold">{{ saison }}</span> uniquement.</span
    >
    <br />
    <span
      >Complétez le formulaire ci-dessous. Le bulletin d'inscription pré-rempli avec les renseignements saisis sera disponible dans un délai de 3 jours et vous sera remis lors d'un prochain
      entraînement ; vous devrez nous le retourner signé.
    </span>
    <br />
    <span>Votre inscription ne deviendra effective qu'après règlement de votre adhésion (cotisation, licence et passeport), à remettre lors des entraînements. </span>
    <br />
    <span>Vous pouvez venir pratiquer dès la prochaine séance d'entraînement</span>
  </v-card>
  <first-sub-form :saison="saison" />
</template>
