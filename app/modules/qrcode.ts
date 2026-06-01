import { defineNuxtModule, extendRouteRules } from '@nuxt/kit'

export default defineNuxtModule({
    setup(options) {
        extendRouteRules('/qrcode', {
            redirect: {
                to: '/',
                statusCode: 302,
            },
        })
    },
})