import { resolve } from "node:path"
import extractorMdc from '@unocss/extractor-mdc'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
    content: {
        filesystem: [
            resolve("./content/**/*.md"),
            resolve("./app/components/**/*.{vue,js,ts}"),
            resolve("./app/layouts/**/*.vue"),
            resolve("./app/pages/**/*.vue"),
            resolve("./app/plugins/**/*.{js,ts}"),
        ]
    },
    // ...UnoCSS options
    presets: [
        // Add any presets you need, e.g., presetUno(), presetAttributify(), etc.
        presetIcons({
        })
    ],
    extractors: [
        extractorMdc(),
    ],
})
