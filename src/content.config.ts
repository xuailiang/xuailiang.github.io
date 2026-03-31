import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    role: z.string(),
    summary: z.string(),
    eyebrow: z.string().optional(),
    mood: z.string().optional(),
    tags: z.array(z.string()),
    cover: z.string(),
    featured: z.boolean(),
    accent: z.string().optional(),
    order: z.number(),
    link: z.string().url().optional(),
  }),
});

export const collections = { work };
