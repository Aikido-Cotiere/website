import presetWind4 from '@unocss/preset-wind4'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@unocss/nuxt',
    'vuetify-nuxt-module',
    'nuxt-studio',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  typescript: {
    typeCheck: true
  },

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

  content: {
    experimental: { sqliteConnector: 'native' },
  },

  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'Aikido-Cotiere',
      repo: 'website',
      branch: 'master'
    },
    i18n: {
      defaultLocale: 'fr' // 'en', 'fr' or 'de'
    },
    git: {
      commit: {
        // Prefix to prepend (include trailing colon for conventional format)
        messagePrefix: 'content:'  // e.g. 'docs:', 'feat:', 'chore:'
      }
    },
    route: '/_studio',
    editor: {
      components: {
        include: ['app/components/content/**'],
      }
    },
    dev: false
  }

})