<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
import Shiatsu from '/Shiatsu.jpg';
</script>

<template>
  <standard-page>
    <standard-content title="Shiatsu">
      <v-img :src="Shiatsu" width="25%"></v-img>
      <p>
        Pratiqué en Extrême-Orient depuis des millénaires, c'est une discipline énergétique qui consiste à effectuer des étirements et des pressions sur l'ensemble du corps. Le Shiatsu procure
        détente, relaxation et bien-être.
      </p>
      <p>
        Shiatsu est une appellation générique qui se traduit en Japonais par «pression digitale». Il n'existe pas un shiatsu, mais des shiatsu, c'est la raison pour laquelle dans la première partie du
        20ième siècle on parlait de shiatsu selon telle école, selon tel ou tel maitre.
      </p>
      <p>
        Conçu pour soigner et renforcer la santé, le shiatsu s'adresse avant tout à l'énergie vitale de chacun, à son «Ki». Une circulation harmonieuse de cette énergie est signe de bonne santé, son
        déséquilibre, son absence ou sa stagnation sont les signes avant-coureurs de maladies.
      </p>
      <p>
        Le Shiatsu se pratique toujours habillé et couché sur un matelas à même le sol. Les paumes des mains, les doigts, mais aussi les coudes, les pieds et les genoux sont utilisés dans des
        pressions précises et spécifiques. Il ne doit pas faire mal, ou plutôt, lorsqu'il y a douleur, le «mal» doit être ressenti comme agréable, libérateur.
      </p>
    </standard-content>

    <standard-content title="Do In">
      <standard-content title="LA VOIE DE L’ENERGIE." sub-content>
        <p>Le Do In est une technique d’automassage qui repose sur la stimulation des grandes fonctions du corps (respiration, circulation, digestion) par le biais des points d’acupuncture.</p>
        <p>Le Do In est un terme japonais désignant un ensemble de travail corporel physique et mental, alliant postures, mouvements, étirements, auto shiatsu, respiration et relaxation.</p>
        <p>
          Le Do In se pratique seul. Hérité des arts martiaux et des pratiques d’éveil des moines. Le Do In consiste à agir par soi-même sur l’énergie circulant dans ses méridiens pour induire un
          équilibrage énergétique
        </p>
        <p>Le Do In : le bien être à la portée demain</p>
      </standard-content>
    </standard-content>
  </standard-page>
</template>
