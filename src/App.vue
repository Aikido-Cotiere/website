<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheMobileMenu from '@/components/TheMobileMenu.vue';
import parralax from '/img/parallax.jpg';
import { useDisplay } from 'vuetify';

export type Link = {
  name: string;
  link?: string;
  children?: Link[];
  exact?: true;
  href?: string;
};

const links = ref<Link[]>([
  { name: 'Accueil', link: '/' },
  {
    name: 'Le Dojo',
    link: '/dojo',
    children: [
      { name: 'Entrainement', link: '/dojo/entrainements' },
      { name: 'Horaires', link: '/dojo/horaires' },
      { name: 'Tarifs', link: '/dojo/tarifs' },
      { name: "Formalités d'inscription", link: '/dojo/formalites' },
      { name: 'Situation', link: '/dojo/situation' },
      { name: "Plan d'accès", link: '/dojo/carte' },
      { name: 'Galerie photos', link: '/dojo/galeriephotos' },
    ],
  },
  { name: 'Brêves', link: '/actus' },
  {
    name: 'Aïkido',
    link: '/aikido',
    children: [
      {
        name: 'Equipement',
        link: '/aikido/equipement',
        children: [
          { name: 'Le hakama', link: '/aikido/equipement/le-hakama' },
          { name: 'Comment mettre le hakama', link: '/aikido/equipement/le-hakama/porterhakama' },
          { name: 'Comment plier le hakama', link: '/aikido/equipement/le-hakama/comment-plier-son-hakama' },
        ],
      },
      { name: 'Règles de conduite', link: '/aikido/regles' },
      { name: 'Quelques mots en japonais', link: '/aikido/lexique' },
    ],
  },
  { name: 'Shiatsu et Do In', link: '/shiatsu' },
  { name: 'Contactez-nous', link: '/contact' },
  { name: 'Inscrivez-nous', link: '/inscription' },
  { name: 'Réinscription', link: '/reinscription' },
  {
    name: 'Liens',
    children: [
      { name: 'Les dojo EPA en Rhône-Alpes', href: 'http://aikidorhone-alpes.com/' },
      { name: "Site de l'EPA-ISTA", href: 'http://www.dojoista.com/' },
      { name: 'Stages EPA-ISTA', href: 'http://www.aikidostage.com/' },
      { name: 'Aikido Tassin', href: 'http://www.aikido-lyon-tassin-69.com/' },
    ],
  },
]);
const openMobile = ref<boolean>(false);
const { mobile } = useDisplay();
</script>

<template>
  <v-app>
    <the-mobile-menu v-model="openMobile" :links="links"></the-mobile-menu>
    <the-header v-model="openMobile" :links="links"></the-header>
    <v-main>
      <v-parallax :src="parralax">
        <Suspense>
          <RouterView></RouterView>
        </Suspense>
      </v-parallax>
    </v-main>
  </v-app>
</template>
