
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

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  }
})