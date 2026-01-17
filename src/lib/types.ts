import { z } from 'zod';

export const SeoPageSchema = z.object({
    pageTitle: z.string(),
    pageDescription: z.string().optional(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    type: z.string().optional(),
    noindex: z.boolean().optional(),
})
export type SeoPageType = z.infer<typeof SeoPageSchema>