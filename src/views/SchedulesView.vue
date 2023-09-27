<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Horaires des cours">
    <v-container>
      <v-row>
        <v-col>
          <standard-content title="Cours d'aïkido">
            <v-container>
              <v-row>
                <v-col>
                  <standard-content title="Enfants de 8 à 13 ans (qui atteindront cet âge au cours de la saison)" bordered>
                    <p>le samedi de 10h30 à 11h45 ; le cours débute à 10h30, prévoir d'arriver 1/4h avant</p>
                  </standard-content>
                </v-col>
                <v-col>
                  <standard-content title="Adultes et adolescents" bordered>
                    <p>le lundi de 19h30 à 22h00</p>
                    <p>le mercredi de 19h30 à 22h00</p>
                  </standard-content>
                </v-col>
              </v-row>
            </v-container>
          </standard-content>
        </v-col>
        <v-col>
          <standard-content title="Séances de Do In">
            <v-container>
              <v-row>
                <v-col>
                  <standard-content title="Pour les adhérents et leur conjoint" bordered>
                    <p>le dimanche de 9h à 12h (une fois par mois, consulter l'agenda)</p>
                  </standard-content>
                </v-col>
              </v-row>
            </v-container>
          </standard-content>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <standard-content>
            <p>
              Le Dojo se situe dans la partie en contrebas de la salle des Bâtonnes, dont l'accès est contrôlé par badge. La porte reste ouverte jusqu'au début du cours. Ensuite, vous devrez faire le
              tour du bâtiment par la droite et accéder au dojo par la partie vitrée sur le côté opposé à l'entrée.
            </p>
            <p class="mt-2 font-italic">
              Pour une prise de contact avec cet art martial accessible à tous quel que soit votre âge et votre condition physique, nous vous proposons une ou deux séances de découverte à votre
              convenance. Pour les <router-link to="/dojo/horaires/decouverte">séances de découverte</router-link>, un jogging et t-shirt sont suffisants.
            </p>
          </standard-content>
        </v-col>
      </v-row>
    </v-container>
  </standard-page>
</template>
