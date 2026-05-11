import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
import prismicConfig from "./prismic.config.json";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
  ],

  css: ["@/assets/css/main.css"],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig: {
      routes: prismicConfig.routes,
    },
  },
})