<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Comment mettre le hakama">
    <standard-content>
      <p>Votre hakama peut être porté de plusieurs façons.</p>
      <p>Voici une vidéo vous expliquant une méthode rapide de le mettre (sans passer les sangles dans la ceinture).</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bTxgMlwNc-Q?si=Yr4nBV2wjkUzSBUA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </standard-content>
  </standard-page>
</template>
