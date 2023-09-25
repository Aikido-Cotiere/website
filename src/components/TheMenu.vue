<script setup lang="ts"></script>
<template>
  <v-tabs align-tabs="center" grow bg-color="grey-lighten-5">
    <v-tab to="/" exact>Accueil</v-tab>
    <v-tab to="/dojo">
      <v-menu open-on-hover :open-delay="0">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            Le Dojo
            <v-icon icon="mdi-menu-down"></v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item to="/dojo/entrainements">
            <v-list-item-title>Entrainement</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/horaires">
            <v-list-item-title>Horaires</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/tarifs">
            <v-list-item-title>Tarifs</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/formalites">
            <v-list-item-title>Formalités d'inscription</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/situation">
            <v-list-item-title>Situation</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/carte">
            <v-list-item-title>Plan d'accès</v-list-item-title>
          </v-list-item>
          <v-list-item to="/dojo/galeriephotos">
            <v-list-item-title>Galerie photos</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
    <v-tab to="/actus"> Brêves </v-tab>
    <v-tab to="/aikido">
      <v-menu open-on-hover :open-delay="0">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            Aïkido
            <v-icon icon="mdi-menu-down"></v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item to="/aikido/equipement">
            <v-list-item-title>
              <v-menu open-on-hover location="end" :open-delay="0">
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                    Equipement
                    <v-icon icon="mdi-menu-down"></v-icon>
                  </div>
                </template>

                <v-list>
                  <v-list-item to="/aikido/equipement/le-hakama">
                    <v-list-item-title>Le hakama</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/aikido/equipement/porterhakama">
                    <v-list-item-title>Comment mettre le hakama</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/aikido/equipement/comment-plier-son-hakama">
                    <v-list-item-title>Comment plier le hakama</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/aikido/regles">
            <v-list-item-title>Règles de conduite</v-list-item-title>
          </v-list-item>
          <v-list-item to="/aikido/lexique">
            <v-list-item-title>Quelques mots en japonais</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
    <v-tab to="/shiatsu"> Shiatsu et Do In </v-tab>
    <v-tab to="/contact"> Contactez-nous </v-tab>
    <v-tab to="/inscription"> Inscrivez-nous </v-tab>
    <v-tab to="/reinscription"> Réinscription </v-tab>
    <v-tab>
      <v-menu open-on-hover :open-delay="0">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            Liens
            <v-icon icon="mdi-menu-down"></v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item href="http://aikidorhone-alpes.com/">
            <v-list-item-title>Les dojo EPA en Rhône-Alpes</v-list-item-title>
          </v-list-item>
          <v-list-item href="http://www.dojoista.com/">
            <v-list-item-title>Site de l'EPA-ISTA</v-list-item-title>
          </v-list-item>
          <v-list-item href="http://www.aikidostage.com/">
            <v-list-item-title>Stages EPA-ISTA</v-list-item-title>
          </v-list-item>
          <v-list-item href="http://www.aikido-lyon-tassin-69.com/">
            <v-list-item-title>Aikido Tassin</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
  </v-tabs>
</template>
