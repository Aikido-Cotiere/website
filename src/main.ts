import '@mdi/font/css/materialdesignicons.css'
import { compile, createApp, h } from 'vue'
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
import CustomSchema from './custom_schema';
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import PageOneColumn from '@/components/storyblok/Pages/PageOneColumn.vue'
import PageTwoColum from '@/components/storyblok/Pages/PageTwoColum.vue'
import PageThreeColum from '@/components/storyblok/Pages/PageThreeColum.vue'
import NewsComponent from '@/components/storyblok/Components/NewsComponent.vue'
import BlockComponent from '@/components/storyblok/Components/BlockComponent.vue'
import VerticalSpacer from '@/components/storyblok/Components/VerticalSpacer.vue'
import ListComponent from '@/components/storyblok/Components/ListComponent.vue'
import ListItemComponent from '@/components/storyblok/Components/ListItemComponent.vue'
import ListSubHeaderComponent from '@/components/storyblok/Components/ListSubHeaderComponent.vue'
import ImageComponent from '@/components/storyblok/Components/ImageComponent.vue'
import HorizontalLineComponent from '@/components/storyblok/Components/HorizontalLineComponent.vue'
import YoutubeComponent from '@/components/storyblok/Components/YoutubeComponent.vue'
import ConductCodeRuleComponent from '@/components/storyblok/Components/ConductCodeRuleComponent.vue'
import TableComponent from '@/components/storyblok/Components/TableComponent.vue'
import ContactUsFormComponent from '@/components/storyblok/Components/ContactUsFormComponent.vue'
import SubscribeFormComponent from '@/components/storyblok/Components/SubscribeFormComponent.vue'
import CarteComponent from '@/components/storyblok/Components/CarteComponent.vue'

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
    accessToken: process.env.NODE_ENV !== 'production' ? 'NaQIcr9tlPKIy30rudMk2gtt' : 'GOUExIGjPe9e2EXR5iLaQgtt',
    bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
    richText: {
        schema: CustomSchema
    }
})

app.component('page_one_column', PageOneColumn)
app.component('page_two_column', PageTwoColum)
app.component('page_three_column', PageThreeColum)

app.component('news_component', NewsComponent)
app.component('block_component', BlockComponent)
app.component('list_component', ListComponent)
app.component('list_item_component', ListItemComponent)
app.component('list_subheader_component', ListSubHeaderComponent)
app.component('vertical_spacer_component', VerticalSpacer)
app.component('image_component', ImageComponent)
app.component('horizontal_line_component', HorizontalLineComponent)
app.component('youtube_component', YoutubeComponent)
app.component('conduct_code_rule_component', ConductCodeRuleComponent)
app.component('table_component', TableComponent)
app.component('contact_us_component', ContactUsFormComponent)
app.component('subscribe_form_component', SubscribeFormComponent)
app.component('carte_component', CarteComponent)
/******************/

app.mount('#app')
