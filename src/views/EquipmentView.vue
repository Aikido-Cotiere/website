<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="L'équipement nécessaire à la pratique de l'aikido">
    <div class="text-caption text-red">
      Avant d'acheter un équipement quelconque, demandez conseil à votre sensei ou aux uchi-deshis (certains distributeurs consentent des remises aux adhérents du dojo).
    </div>
    <standard-content title="Vêtements">
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Le keikogi </template>
          <template v-slot:subtitle>
            <p>
              Souvent improprement appelé kimono, c'est le vêtement de base de l'aïkidoka. Autrefois, ces vêtements constituaient les dessous des japonais; le keikogi se porte donc sans t-shirt, sauf
              bien entendu pour les femmes.
            </p>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Le hakama </template>
          <template v-slot:subtitle>
            <p>C'est un pantalon large de couleur noire ou bleu. Le port du hakama est accordé par le professeur à l'aïkidoka qui a atteint un certain niveau de pratique.</p>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Obi </template>
          <template v-slot:subtitle>
            <p>C'est une ceinture large utilisée principalement par les pratiquants d'aïkido ou de kendo. Elle facilite le port du hakama.</p>
            <p>Une ceinture plus traditionnelle, comme celle des judokas ou des karatekas, peut aussi être utilisée.</p>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Zooris </template>
          <template v-slot:subtitle>
            <p>Pour des raisons d'hygiène, le trajet du vestiaire au tatami ne se fait pas pieds-nus.</p>
            <p>Le port de sandales, tongs ou zooris (sandales traditionnelles japonaises en paille) est indispensable.</p>
          </template>
        </v-list-item>
      </v-list>
    </standard-content>

    <standard-content title="Armes">
      <p>Les armes pour la pratique de l'aïkido sont en bois.</p>
      <p>
        Les dojo disposent généralement de quelques armes pour les débutants. Si le néophyte persévère dans la pratique de l'aïkido, l'achat d'armes personnelles est nécessaire. Eviter alors l'achat
        d'armes «bon marché» qui souvent, ne respectent pas les normes de poids, et dont l'utilisation s'avère rapidement désagréable.
      </p>
      <v-list density="compact" class="bg-transparent">
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Jyo </template>
          <template v-slot:subtitle>
            <p>C'est la lance des samouraïs, remplacée pour la sécurité lors de la pratique de l'aïkido par un bâton «court», d'une longueur de 128 cm et d'un poids de 600 à 700 g.</p>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Bokken </template>
          <template v-slot:subtitle>
            <p>Réplique du katana des samouraïs, c'est un sabre d'une longueur de 102 cm pour un poids de 600 g environ.</p>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-circle-small">
          <template v-slot:title> Tanto </template>
          <template v-slot:subtitle>
            <p>C'est un couteau d'une longueur de 29,5 cm.</p>
          </template>
        </v-list-item>
      </v-list>
    </standard-content>
  </standard-page>
</template>
