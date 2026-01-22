import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string().datetime({
      message: 'Published date must be a datetime string in ISO 8601 format (e.g., "YYYY-MM-DDTHH:mm:ssZ").',
    }),
  }),
});

export const collections = { docs };
