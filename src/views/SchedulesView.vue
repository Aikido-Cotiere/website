<template>
  <v-card variant="flat" class="bg-transparent">
    <v-card-title>
      <span class="text-h5">Horaires des cours</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col>
            <v-card variant="text">
              <v-card-title>Cours d'aïkido </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-card variant="outlined">
                        <v-card-title>Enfants de 8 à 13 ans (qui atteindront cet âge au cours de la saison)</v-card-title>
                        <v-card-text>
                          <p>le samedi de 10h30 à 11h45 ; le cours débute à 10h30, prévoir d'arriver 1/4h avant</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card variant="outlined">
                        <v-card-title>Adultes et adolescents</v-card-title>
                        <v-card-text>
                          <p>le lundi de 19h30 à 22h00</p>
                          <p>le mercredi de 19h30 à 22h00</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card variant="text">
              <v-card-title>Séances de Do In </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-card variant="outlined">
                        <v-card-title>Pour les adhérents et leur conjoint</v-card-title>
                        <v-card-text>
                          <p>le dimanche de 9h à 12h (une fois par mois, consulter l'agenda)</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card variant="flat" class="bg-transparent">
    <v-card-text>
      <p>
        Le Dojo se situe dans la partie en contrebas de la salle des Bâtonnes, dont l'accès est contrôlé par badge. La porte reste ouverte jusqu'au début du cours. Ensuite, vous devrez faire le tour
        du bâtiment par la droite et accéder au dojo par la partie vitrée sur le côté opposé à l'entrée.
      </p>
      <p class="mt-2 font-italic">
        Pour une prise de contact avec cet art martial accessible à tous quel que soit votre âge et votre condition physique, nous vous proposons une ou deux séances de découverte à votre convenance.
        Pour les <router-link to="/dojo/horaires/decouverte">séances de découverte</router-link>, un jogging et t-shirt sont suffisants.
      </p>
    </v-card-text>
  </v-card>
</template>
