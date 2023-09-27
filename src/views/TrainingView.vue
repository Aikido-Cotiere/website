<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Les entrainements">
    <standard-content title="Professeur"> <span class="text-blue font-italic">Guy-Michel BASILE </span>- Ceinture noire (Menkyo) - Nidan EPA </standard-content>

    <standard-content title=" Organisation des cours">
      <p>Les enfants peuvent pratiquer l'aïkido à partir de 8 ans.</p>
      <p>
        Les cours adultes sont ouverts aux adolescents à partir de 14 ans. Consulter les <router-link to="/dojo/horaires">horaires</router-link> et les
        <router-link to="/dojo/tarifs">tarifs</router-link>.
      </p>
      <p>Une séance de Do In est proposée une fois par mois, le dimanche matin (consulter l'agenda).</p>
    </standard-content>

    <standard-content title="Adresse du Dojo">
      <p>Les cours se déroulent à la salle des Bâtonnes, Chemin de Marigneux à Dagneux (voir le plan d'accès, repère vert).</p>
    </standard-content>
  </standard-page>
</template>
