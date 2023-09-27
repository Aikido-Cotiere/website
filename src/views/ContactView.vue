<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
import ContactUsForm from '@/components/ContactUsForm.vue';
</script>
<template>
  <standard-page title="Nous contacter">
    <standard-content>
      <p class="font-weight-bold">Pour des informations détaillées sur les horaires, tarifs ..., consultez le menu "Le Dojo".</p>
      <p>
        Après validation de votre demande (le traitement pouvant prendre plusieurs secondes, merci de patienter et ne pas valider plusieurs fois la saisie), vous recevrez un mail de confirmation à
        l'adresse mail que vous avez renseignée (merci de la vérifier avant de valider votre saisie). Si ce n'est pas le cas, vous pouvez nous contacter directement par mail à l'adresse
        <a href="mailto:aikido01120-2020@yahoo.com">aikido01120-2020@yahoo.com</a>.
      </p>
      <contact-us-form></contact-us-form>
    </standard-content>
  </standard-page>
</template>
