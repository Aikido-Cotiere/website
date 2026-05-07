import presetWind4 from '@unocss/preset-wind4'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    'vuetify-nuxt-module',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark', // 'system' requires ssr: false
      },
      icons: {
        defaultSet: 'unocss-mdi',
      }
    },
  },

   unocss: {
    icons: true,

  },

})