import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const PILLARS = ['educational', 'brand-story', 'comparison'] as const;
export const STATUSES = ['linked', 'hidden'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      description: z.string().min(20).max(280),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      pillar: z.enum(PILLARS),
      status: z.enum(STATUSES).default('hidden'),
      draft: z.boolean().default(false),
      targetKeyword: z.string().optional(),
      author: z.string().default('Mangaroa Farms'),
    }),
});

export const collections = { blog };
