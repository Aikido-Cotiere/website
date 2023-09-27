<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
import SubscribeForm from '@/components/SubscribeForm.vue';
</script>

<template>
  <standard-page title="Première inscription">
    <standard-content>
      <p>Pour des informations détaillées sur les horaires, tarifs ..., consultez le menu "Le Dojo".</p>
      <p>
        Ce formulaire est destiné exclusivement pour les <span class="text-red">nouveaux pratiquants qui n'ont jamais été inscrits</span> dans notre dojo. Dans le cas contraire, merci d'utiliser le
        <b>formulaire de réinscription</b>.
      </p>
      <p>Cette inscription est valable pour la saison <b>2022</b> uniquement.</p>
      <p>
        Complétez le formulaire ci-dessous. Le bulletin d'inscription pré-rempli avec les renseignements saisis sera disponible dans un délai de 3 jours et vous sera remis lors d'un prochain
        entraînement ; vous devrez nous le retourner signé.
      </p>
      <p>Votre inscription ne deviendra effective qu'après règlement de votre adhésion (cotisation, licence et passeport), à remettre lors des entraînements.</p>
      <p>Vous pouvez venir pratiquer dès la prochaine séance d'entraînement ...</p>
      <subscribe-form></subscribe-form>
    </standard-content>
  </standard-page>
</template>
