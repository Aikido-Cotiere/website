export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  ssr: true,

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@unocss/nuxt',
    'vuetify-nuxt-module',
  ],

  unocss: {
    icons: true
  },

  content: {
    preview: {
      //dev: true,
      api: 'https://api.nuxt.studio'
    },
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'unocss-mdi',
      }
    }
  }
})