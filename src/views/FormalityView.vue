<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Nouveau pratiquant (n'ayant jamais été inscrit à ATC)">
    <p>Vous renseignez en ligne le formulaire d'inscription <router-link to="/inscription">(Inscrivez-vous ...)</router-link> et validez votre saisie.</p>
    <p>
      Nous imprimons le formulaire et vous le faisons passer lors d'un prochain entraînement pour validation et signature. L'inscription ne sera définitive qu'après règlement de la licence et de la
      cotisation et fourniture du certificat médical.
    </p>
    <standard-content title="Pièces à fournir">
      <standard-content title="Impérativement pour le premier cours, y compris le cours d'essai" sub-content>
        <v-list density="compact" class="bg-transparent">
          <v-list-subheader>Pour les adultes</v-list-subheader>
          <v-list-item prepend-icon="mdi-circle-small">Certificat médical obligatoire, précisant « aptitude à l'aïkido ».</v-list-item>
          <v-list-subheader> Pour les mineurs</v-list-subheader>
          <v-list-item prepend-icon="mdi-circle-small">Téléchargez et renseignez le questionnaire médical, à dater et signer par un représentant légal</v-list-item>
          <v-list-item prepend-icon="mdi-circle-small">Si vous répondez positivement à un des points de ce questionnaire, vous devrez fournir un certificat médical</v-list-item>
          <v-list-subheader> Pour tous</v-list-subheader>
          <v-list-item prepend-icon="mdi-circle-small"
            >Renseigner le formulaire d'inscription en ligne (le bulletin « papier » vous sera remis en cas d'inscription définitive pour signature)
          </v-list-item>
          <v-list-item prepend-icon="mdi-circle-small"> Règlement de la licence (le chèque sera débité uniquement en cas d'inscription définitive) </v-list-item>
        </v-list>
      </standard-content>

      <standard-content title="Au cours suivant" sub-content>
        <v-list density="compact" class="bg-transparent">
          <v-list-item prepend-icon="mdi-circle-small">Règlement de la cotisation</v-list-item>
        </v-list>
      </standard-content>

      <standard-content title="Sur le passeport" sub-content>
        <v-list density="compact" class="bg-transparent">
          <v-list-item prepend-icon="mdi-circle-small">une photo d'identité sera à coller sur le passeport lorsqu'on vous le remettra (pour les nouveaux pratiquants).</v-list-item>
        </v-list>
      </standard-content>

      <p class="text-blue"></p>
      <v-btn size="small" variant="outlined" href="/Renseignements_202008.pdf" download>Imprimer cette fiche de renseignements</v-btn>
    </standard-content>
  </standard-page>

  <standard-page title="Réinscription (pratiquant déjà enregistré)">
    <p>Vous renseignez en ligne le formulaire de réinscription <router-link to="/reinscription">(Réinscription)</router-link> et validez votre saisie.</p>
    <standard-content title="Pièces à fournir">
      <standard-content title="Impérativement pour le premier cours" sub-content>
        <v-list density="compact" class="bg-transparent">
          <v-list-item prepend-icon="mdi-circle-small"
            >Le certificat médical, précisant « aptitude à l'aïkido » est valable 3 ans s'il ne comporte pas de mention limitative de durée ; par exemple, un certificat médical établi en 2019 devra
            être renouvelé en 2022. S'il est toujours valide, téléchargez et renseignez le <v-btn variant="outlined" size="small" href="/QS_ATC.pdf" download>Questionnaire de santé</v-btn>, à dater et
            signer (par un représentant légal pour les pratiquants mineurs).
          </v-list-item>
          <v-list-item prepend-icon="mdi-circle-small">Règlement de la cotisation</v-list-item>
          <v-list-item prepend-icon="mdi-circle-small">Passeport EPA</v-list-item>
        </v-list>
      </standard-content>
    </standard-content>
  </standard-page>
</template>
