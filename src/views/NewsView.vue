<script setup lang="ts">
import NewsEntry from '@/components/NewsEntry.vue';
import Telethon from '/Telethon2017.jpg';
import StateBourg from '/StageBourg2017.jpg';
import Nuit from '/Nuit1.jpg';
</script>
<template>
  <news-entry title="Reprise des entrainements saison 2023/2024" :date="new Date(2023, 7, 22)">
    <p>
      Reprise des entraînements :
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">adultes et adolescents : 4 septembre à 19h30</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">enfants <span class="text-red font-weight-bold">de 8 à 13 ans</span> (nés entre 2010 et 2015 inclus) : 9 septembre à 10h15</v-list-item>
      </v-list>
    </p>
    <v-divider class="my-5"></v-divider>
    <p>
      Pour les nouveaux adhérents et les enfants qui souhaitent se réinscrire, les inscriptions en ligne, sont ouvertes. L'inscription définitive se fera à la reprise des entraînements. Vous aurez la
      possibilité de faire une ou deux séances d'essai. A cette occasion, pensez à vous munir d'un certificat médical ou du questionnaire de santé (disponible dans le menu Le Dojo/Formalités
      d'inscription) complété et du chèque de règlement de la licence (ne sera encaissé qu'en cas d'adhésion effective).
    </p>
    <v-divider class="my-5"></v-divider>
    <p>
      Renseignements :
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">au début des cours pour les adultes, les lundi et mercredi à 19h30 ou le samedi à 8h30</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">au début des cours pour les enfants, le samedi à 10h15</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">sur le site, rubrique Horaires et tarifs.</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">depuis le site, par mail via la rubrique Contactez-nous ...</v-list-item>
      </v-list>
    </p>
  </news-entry>

  <news-entry title="Téléthon 2017" :date="new Date(2018, 7, 1)">
    <p>
      Pour cette nouvelle édition du Téléthon organisée par le Comité des Fêtes de Dagneux, le dojo était représenté par Ahmed qui a préparé une délicieuse soupe qu'il a servie avec l'aide d'Alain.
      Félicitations et remerciements à nos deux pratiquants pour leur participation à cet événément important.
    </p>
    <v-img :src="Telethon" width="343" height="450"></v-img>
  </news-entry>

  <news-entry title="Stage Alain Peyrache à Bourg-en-Bresse (2017)" :date="new Date(2017, 10, 27)">
    <p>Notre senseï au stage dirigé par Alain PEYRACHE à Bourg-en-Bresse les 11 et 12/11/2017.</p>
    <v-img :src="StateBourg" width="362" height="287"></v-img>
  </news-entry>

  <news-entry title="Nuit des Arts Martiaux 2010" :date="new Date(2011, 9, 5)">
    <p>
      Lors de la seconde édition de "La nuit des arts martiaux et des sports de combat" de Fontaines-sur-Saône le samedi 3 avril 2010, une démonstration d'aïkido a été effectuée par Guy-Michel et
      Philippe. Une <a href="http://www.youtube.com/watch?v=6-wA_w_en_8">vidéo</a> a été mise en ligne par le <a href="http://www.snc-aikido.com/">SNC Caluire</a>.
    </p>
    <v-img :src="Nuit" width="287" height="262"></v-img>
  </news-entry>
</template>
