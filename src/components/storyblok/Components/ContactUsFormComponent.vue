<script setup lang="ts">
import { ref } from 'vue';

const valid = ref(false);
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

const message = ref('');
</script>

<template>
  <v-form v-model="valid" @submit.prevent class=" bg-white">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Prénom*" variant="outlined" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Nom*" variant="outlined" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="email" :rules="emailRules" label="Adresse email*" variant="outlined" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea v-model="message" label="Message*" variant="outlined" required hide-details></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn type="submit">Envoyer</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
