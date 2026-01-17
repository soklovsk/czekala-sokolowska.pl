import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; 
import { SeoPageSchema } from '@src/lib/types';
import slug from 'slug'

const pages = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/"}),
  schema: SeoPageSchema.merge(
    z.object({
        slug: z.string().refine((e) => slug(e) === e, { message: "Page slug is not valid."}),
        lang: z.string()
    })
  )
});

export const collections = {
  pages
};

