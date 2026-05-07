import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({

    collections: {
        content: defineCollection({
            type: 'page',
            source: {
                include: '**/*.md',
                exclude: ['news/**']
            },
            schema: z.object({
                title: z.string().min(1, 'Title is required'),
                description: z.string().optional(),
                menu: z.string().optional(),
                icon: z.string().optional(),
                group: z.string().optional(),
            }),
        }),

        news: defineCollection({
            type: 'page',
            source: 'news/*.md',
            schema: z.object({
                title: z.string().min(1, 'Title is required'),
                description: z.string().optional(),
                date: z.date(),
                image: z.string().optional().editor({ input: 'icon' }),
            }),
        }),

    }
})