import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    hook: z.string(), // one line: what was solved
    client: z.string(),
    year: z.string(),
    duration: z.string().optional(),
    role: z.array(z.string()),
    tools: z.array(z.string()),
    tags: z.array(z.string()),
    badge: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(true),
    cover: z.string().optional(),
    accent: z.string().default('#ecf241'),
    liveUrl: z.string().optional(),
    liveLabel: z.string().optional(),
    tldr: z.object({
      problem: z.string(),
      solution: z.string(),
      outcome: z.string(),
    }),
  }),
});

export const collections = { work };
