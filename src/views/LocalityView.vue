<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="AIKIDO TRADITIONNEL DE LA COTIERE">
    <standard-content title="Siège social :">
      <v-container>
        <v-row align="center">
          <v-col> MAIRIE DE DAGNEUX ESPLANADE DE LA MAIRIE 01120 DAGNEUX </v-col>
          <v-col>
            <v-img width="141" height="196" src="/Image_logo_ATC.gif"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </standard-content>

    <standard-content title="Dojo :">
      <v-container>
        <v-row align="center">
          <v-col> SALLE DES BATONNES 184 CHEMIN DE MARIGNEUX 01120 DAGNEUX </v-col>
          <v-col>
            <v-img width="400" src="/DSCN2025.jpeg"></v-img>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="font-italic">
            Le complexe sportif se situe dans la partie basse de la salle des Bâtonnes. Après l'heure de début du cours, l'accès se fait par les portes situés côté dojo (contourner le bâtiment par la
            droite)
          </v-col>
          <v-col>
            <v-img width="400" src="/DSCN2026.jpeg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </standard-content>
  </standard-page>
</template>
