<script setup lang="ts">
import { ref } from 'vue';
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
import LexiqueList from '@/components/LexiqueList.vue';

const words = ref([
  { word: 'Aï hammi', meaning: 'Même garde' },
  { word: 'Chi', meaning: 'Terre' },
  { word: 'Chudan', meaning: 'Bas' },
  { word: 'Dori', meaning: 'Prise' },
  { word: 'Garami', meaning: 'Lier, nouer, maintenir' },
  { word: 'Geri', meaning: 'Coup de pied' },
  { word: 'Gyaku', meaning: 'Opposé, inverse' },
  { word: 'Hiji', meaning: 'Coude' },
  { word: 'Ho', meaning: 'Direction, Méthode' },
  { word: 'Iri', meaning: 'Centre' },
  { word: 'Jodan', meaning: 'Haut' },
  { word: 'Juji', meaning: 'Croix' },
  { word: 'Kaeshi', meaning: 'Torsion' },
  { word: 'Kaïten', meaning: 'Rotation' },
  { word: 'Kaku', meaning: 'Côtés' },
  { word: 'Kamae', meaning: 'Construction, Garde' },
  { word: 'Kata', meaning: 'Epaule' },
  { word: 'Katate', meaning: 'Une main' },
  { word: 'Kiri', meaning: 'Couper' },
  { word: 'Ko', meaning: 'Petit' },
  { word: 'Ko', meaning: 'Expirer' },
  { word: 'Koshi', meaning: 'Hanche' },
  { word: 'Kubi', meaning: 'Cou' },
  { word: 'Kyu', meaning: 'Inspirer' },
  { word: 'Maaï', meaning: 'Distance' },
  { word: 'Mae', meaning: 'Devant' },
  { word: 'Men', meaning: 'Tête' },
  { word: 'Mi', meaning: 'Corps' },
  { word: 'Muna', meaning: 'Revers' },
  { word: 'Nage', meaning: 'Projection' },
  { word: 'O', meaning: 'Grand' },
  { word: 'Osae', meaning: 'Immobilisation' },
  { word: 'Otoshi', meaning: 'Tomber' },
  { word: 'Ryo', meaning: 'Deux' },
  { word: 'Sabaki', meaning: 'Esquiver, Tourner' },
  { word: 'San', meaning: 'Trois' },
  { word: 'Sei', meaning: 'Force, Vigueur' },
  { word: 'Shi', meaning: 'Quatre' },
  { word: 'Shi', meaning: 'Forme, figure, taille' },
  { word: 'Shime', meaning: 'Etrangler' },
  { word: 'Sode', meaning: 'Manche' },
  { word: 'Soto', meaning: 'Extérieur' },
  { word: 'Sumi', meaning: 'Coin, angle' },
  { word: 'Taï', meaning: 'Corps' },
  { word: 'Te', meaning: 'Main' },
  { word: 'Ten', meaning: 'Ciel' },
  { word: 'Tsuki', meaning: 'Coup de poing' },
  { word: 'Uchi', meaning: 'Frapper, Intérieur' },
  { word: 'Ude', meaning: 'Bras' },
  { word: 'Ushiro', meaning: 'Derrière' },
  { word: 'Waza', meaning: 'Technique' },
  { word: 'Yoko', meaning: 'Côté' },
]);

const numbers = ref([
  { word: 'Ichi', meaning: '1' },
  { word: 'Ni', meaning: '2' },
  { word: 'San', meaning: '3' },
  { word: 'Shi', meaning: '4' },
  { word: 'Go', meaning: '5' },
  { word: 'Roku', meaning: '6' },
  { word: 'Shichi', meaning: '7' },
  { word: 'Hachi', meaning: '8' },
  { word: 'Ku', meaning: '9' },
  { word: 'Jû', meaning: '10' },
]);
</script>
<template>
  <standard-page title="Lexique japonais/français">
    <standard-content title="Quelques mots">
      <lexique-list :words="words"></lexique-list>
    </standard-content>

    <standard-content title="Les chiffres">
      <lexique-list :words="numbers"></lexique-list>
    </standard-content>
  </standard-page>
</template>
