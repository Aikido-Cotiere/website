import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

//Storyblok
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import Page from '@/components/storyblok/Page.vue'
import News from '@/components/storyblok/News.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

/******Storyblok ******/
app.use(StoryblokVue, {
    accessToken: 'NaQIcr9tlPKIy30rudMk2gtt',
    bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
})
app.component('Page', Page)
app.component('news', News)
/******************/

app.mount('#app')
