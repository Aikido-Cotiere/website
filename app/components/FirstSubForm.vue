<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  saison: number;
}>();

const valid = ref(false);
const sex = ref('');
const firstname = ref('');
const lastname = ref('');
const nameRules = ref([
  (value: string | null | undefined) => {
    if (value) return true;

    return 'Le nom est obligatoire.';
  },
  (value: string | null | undefined) => {
    if ((value?.length ?? 0) <= 10) return true;

    return 'Le nom doit faire moins de 10 caractères.';
  },
]);
const email = ref('');
const emailRules = ref([
  (value: string | null | undefined) => {
    if (value) return true;

    return "L'adresse email est obligatoire.";
  },
  (value: string | null | undefined) => {
    if (!!value && /.+@.+\..+/.test(value)) return true;

    return "L'adresse email est invalide.";
  },
]);

const birthdate = ref();
const isUnderage = ref(false);
const firstLegalResponsible = ref('');
const secondLegalResponsible = ref('');
const firstLegalResponsibleRules = ref([
  (value: string | null | undefined) => {
    if (!!value && /.+@.+\..+/.test(value)) return true;
    return 'Le responsable légal est obligatoire.';
  },
]);
const phoneNumber = ref('');
const phoneNumberUrgency = ref('');
const phoneNumberRules = ref([
  () => {
    if (phoneNumber.value) return true;
    else if (phoneNumberUrgency.value) return true;
    return 'Au moins un numéro de téléphone est obligatoire.';
  },
]);
const address = ref('');
const addressRules = ref([
  (value: string | null | undefined) => {
    if (value) return true;

    return "L'adresse est obligatoire.";
  },
]);

const postalCode = ref('');
const postalCodeRules = ref([
  (value: string | null | undefined) => {
    if (value) return true;

    return 'Le code postal est obligatoire.';
  },
]);

const city = ref('');
const cityRules = ref([
  (value: string | null | undefined) => {
    if (value) return true;

    return 'La ville est obligatoire.';
  },
]);

const familly = ref('');
const hospital = ref('');
const ista = ref('');
const previousDojo = ref('');
const knowMeans = ref([
  { title: 'Bouche à oreille', value: 'BOU' },
  { title: 'Forum des associations Dagneux', value: 'FAD' },
  { title: 'Forum des associations Montluel', value: 'FAM' },
  { title: 'Site internet du dojo', value: 'INT' },
  { title: 'Lien depuis un site internet', value: 'LSI' },
  { title: 'Affichage', value: 'AFF' },
  { title: 'Journal', value: 'JOU' },
  { title: 'Facebook', value: 'FBK' },
  { title: 'Distribution de flyers', value: 'FLY' },
]);
const knowMean = ref('');
const image = ref(false);
</script>

<template>
  <v-form v-model="valid" @submit.prevent>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field :model-value="props.saison" readonly :rules="nameRules" :counter="10" label="saison" variant="outlined" required class="bg-white" />
        </v-col>
      </v-row>
      <v-card class="my-2 bg-white" variant="outlined">
        <v-card-title>Informations Personnelles</v-card-title>
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="3">
              <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Prénom du pratiquant*" variant="outlined" required class="bg-white" />
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Nom du pratiquant*" variant="outlined" required class="bg-white" />
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field v-model="birthdate" type="date" :rules="emailRules" label="Date de naissance*" variant="outlined" required class="bg-white" />
            </v-col>
            <v-col cols="12" md="3">
              <v-radio-group v-model="sex" label="Sexe">
                <v-radio label="Masculin" value="M" class="bg-white" />
                <v-radio label="Feminin" value="F" class="bg-white" />
              </v-radio-group>
            </v-col>
            <v-col cols="6" md="3">
              <v-text-field v-model="phoneNumber" label="Numéro de téléphone*" :rules="phoneNumberRules" required variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="6" md="3">
              <v-text-field v-model="phoneNumberUrgency" label="Numéro de téléphone (personne à prévenir en cas d'urgence)*" :rules="phoneNumberRules" required variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="address" label="Adresse*" :rules="addressRules" required variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="6" md="2">
              <v-text-field v-model="postalCode" label="Code postal*" :rules="postalCodeRules" required variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="city" label="Ville*" :rules="cityRules" required variant="outlined" class="bg-white" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="2">
              <v-checkbox v-model="isUnderage" label="Mineur ?" class="bg-white" />
            </v-col>
            <v-col v-if="isUnderage" cols="12" md="4">
              <v-text-field
                v-model="firstLegalResponsible"
                :rules="firstLegalResponsibleRules"
                label="Responsable légal pour les mineurs (père, mère ou tuteur)*"
                variant="outlined"
                required
                class="bg-white"
              />
            </v-col>
            <v-col v-if="isUnderage" cols="12" md="4">
              <v-text-field v-model="secondLegalResponsible" label="Autre responsable légal pour les mineurs (2ème parent)" variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="email" :rules="emailRules" label="Adresse email*" variant="outlined" required class="bg-white" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="my-2 bg-white" variant="outlined">
        <v-card-title>Informations Contractuelles</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="familly"
                label="Adhésion famille"
                hint="Si plusieurs adhérents d'un même foyer fiscal, indiquez le nom du pratiquant le plus âgé sous la forme NOM prénom ; en cas de prénom composé,  séparer les prénoms par un - (par exemple : MARTIN Jean-Pierre). "
                variant="outlined"
                class="bg-white"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="ista" label="N° ISTA" variant="outlined" class="bg-white" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="previousDojo" label="Ancien Dojo et nom du professeur" variant="outlined" class="bg-white" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="my-2 bg-white" variant="outlined">
        <v-card-title>Informations médicales</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field v-model="hospital" label="Etablissement médical préféré" hint="Hôpital ou clinique à privilégier en cas d'urgence" variant="outlined" class="bg-white" />
            </v-col>
            <v-col>
              <v-text-field v-model="hospital" label="Antécédents médicaux" hint="Information a communiquer en cas d'urgence" variant="outlined" class="bg-white" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row class="mt-4">
        <v-col>
          <v-select v-model="knowMean" :items="knowMeans" label="Comment avez-vous connu le dojo ?*" variant="outlined" required class="bg-white" />
        </v-col>
      </v-row>
      <v-row class="mt-4">
        <v-col cols="12" md="auto">
          <v-checkbox v-model="image" label="Droit d'utilisation de l'image" variant="outlined" class="bg-white" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="primary" type="submit">Envoyer</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
