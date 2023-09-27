<script setup lang="ts">
import { ref } from 'vue';
import ConductCodeRule from '@/components/ConductCodeRule.vue';
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
const rules = ref([
  {
    title: 'Respectez vos instruments de travail',
    subDetails: ["le Gi (tenue d'entraînement) doit être propre et en bon état", "les armes doivent être rangées lorsqu'elles ne sont pas utilisées"],
  },
  {
    title: 'Respectez vos partenaires en veillant à votre propreté corporelle, et à la longueur des ongles des mains et des pieds, avant de monter sur le tatami',
  },
  {
    title: "Ne vous servez jamais d'un Gi ou d'armes qui ne vous appartiennent pas",
  },
  {
    title: 'En entrant dans le dojo et en en sortant, vous devez saluer',
  },
  {
    title: 'En montant sur le tatami et en le quittant, vous devez saluer',
  },
  {
    title: 'Saluez toujours en direction du kamiza et du portrait de O SenseÏ',
  },
  {
    title:
      "Quelques minutes avant l'entraînement, vous devez y être préparé, assis en seiza, tous sur une même ligne, et dans une posture de méditation. Ces quelques minutes permettent à votre esprit de faire le vide, de se débarrasser des problèmes de la journée et préparent à l'étude.",
  },
  {
    title: 'Le cours commence et se termine par une cérémonie formelle.',
    subDetails: [
      "c'est le professeur qui donne le signal du salut et dans un salut correct, l'élève s'appliquera à ne relever la tête qu'après son instructeur",
      "Il est essentiel d'être à l'heure pour y participer ; si vous arrivez en retard, vous devez attendre assis à côté du tatami jusqu'à ce que l'enseignant vous fasse signe de vous joindre au cours. Saluez-le à genoux en montant sur le tapis. Veillez aussi à ne pas perturber le cours",
    ],
  },
  {
    title:
      "La façon correcte de s'asseoir sur le tatami est la position en seiza. Mais si vous êtes blessé au genou, vous pouvez vous asseoir en tailleur. N'allongez jamais les jambes et ne vous adossez pas au mur ou à un poteau. Vous devez être disponible à chaque instant.",
  },
  {
    title: "Ne quittez pas le tatami pendant l'entraînement sauf en cas de blessure ou de malaise et en avertissant l'enseignant.",
  },
  {
    title:
      "Quand l'instructeur montre une technique, vous devez rester assis en seiza et regarder attentivement, en veillant à ne pas tourner le dos au kamiza. Après la démonstration,saluez l'instructeur, puis saluez votre partenaire et commencez à travailler.",
  },
  {
    title: "Dès que la fin d'une technique est annoncée, arrêtez immédiatement votre mouvement, saluez votre partenaire et rejoignez les autres pratiquants assis en ligne.",
  },
  {
    title: "Ne restez jamais debout sur le tapis sans travailler. S'il le faut, restez en seiza en attendant votre tour.",
  },
]);
</script>
<template>
  <StandardPage title="Les règles de conduite dans un dojo">
    <StandardContent title="La disposition du dojo">
      <v-img src="/Dojo.jpg" width="600"></v-img>
      <p>
        Dans le cas où il n'y a aucune marque spécialisée, le kamiza se trouve à l'opposé de l'entrée. Le fond de la pièce ou de la maison est d'un rang plus élevé que l'entrée. Le côté gauche, vu du
        kamiza, est le côté le plus honorifique.
      </p>
      <p>En Europe, une photo de O Senseï orne le kamiza et symbolise la transmission de l'enseignement.</p>
    </StandardContent>
    <StandardContent title="Etiquette sur le tatami">
      <ConductCodeRule v-for="(rule, index) in rules" :key="index" :title="rule.title" :details="rule.subDetails" :number="index" :showDivider="index < rules.length - 1" />
    </StandardContent>
  </StandardPage>
</template>
