<script setup lang="ts">
import StandardPage from '@/components/StandardPage.vue';
import StandardContent from '@/components/StandardContent.vue';
</script>
<template>
  <standard-page title="Comment plier le hakama">
    <standard-content>
      <p>Apprenez à plier correctement votre hakama</p>
      <v-img src="/hakama.jpg" height="460" width="652"></v-img>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/n6APGiqhrXY?si=cGpdU45cKHOl-F8p"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </standard-content>
  </standard-page>
</template>
