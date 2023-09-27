<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
import bokken from '/img/bokkenr.jpg';
</script>
<template>
  <standard-page title=" L'Aïkido">
    <standard-content>
      <p>C'est un art martial fondé au Japon dans la première moitié du XXe siècle par Maître UESHIBA Morihei.</p>
      <p>
        Bien qu'il soit une redoutable technique de combat, l'Aïkido ne vise pas la destruction de l'autre, mais tend au contraire à permettre aux pratiquants de se construire eux-mêmes, en prenant
        conscience de leurs capacités comme de leurs limites. L'Aïkido permet de développer sa perception intuitive de l'attaque et, sans jamais s'y opposer, d'utiliser la force contenue dans cette
        attaque afin qu'elle se retourne contre l'attaquant lui-même.
      </p>
      <p>
        La pratique, qui, outre le travail à mains nues, comporte aussi un travail au sabre (Bokken), au bâton (Jo) et au couteau (Tanto), permet l'entretien d'une condition physique excellente et
        naturelle. Elle accroît les facultés d'adaptation en souplesse, développe une grande résistance aux stress de la vie moderne.
      </p>
      <p>La compétition n'existe pas en Aïkido. Il n’y a pas dualité mais au contraire une recherche de l’unité.</p>
      <p>Pas de course à la médaille dans cette discipline où chacun travaille à son rythme, selon ses capacités et sa volonté.</p>
      <p>Si l’on veut traduire le terme Aïkido, c’est « la voie de l’Harmonisation de l’énergie ».</p>
      <p>L'Aïkido ne fait pas intervenir la force physique des pratiquants. Tous, hommes et femmes, peuvent le pratiquer ensemble « de 7 à 77 ans » ... et plus longtemps encore.</p>
      <v-img :src="bokken" width="640" height="400"></v-img>
    </standard-content>

    <standard-content title="Quelques vidéos ...">
      <v-list class="bg-transparent" density="compact">
        <v-list-subheader>O Sensei UESHIBA Morihei</v-list-subheader>
        <v-list-item prepend-icon="mdi-circle-small"><a href="http://www.youtube.com/watch?v=XoDK3XuvZWw">en 1969</a>, à l'âge de 85 ans</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small"><a href="http://www.youtube.com/watch?v=98yRuBkUBGQ&feature=related">en 1935</a></v-list-item>
        <v-list-subheader>D'autres grands maîtres</v-list-subheader>
        <v-list-item prepend-icon="mdi-circle-small"><a href="http://www.youtube.com/watch?v=Bpz4Zrjt7Bk">TAMURA Nobuyoshi Sensei</a> (8ème dan)</v-list-item>
        <v-list-item prepend-icon="mdi-circle-small"><a href="http://www.dojoista.com/Videos.aspx">Alain PEYRACHE</a> (Sôke EPA)</v-list-item>
      </v-list>
    </standard-content>
  </standard-page>
</template>
