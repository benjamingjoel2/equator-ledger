import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, DESTINATIONS, AUTHORS, OPERATORS } from './data/site';
import { PHOTO_KEYS } from './data/photos';

const keys = <T extends object>(o: T) => Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    /** Short headline used in cards and breadcrumbs if different */
    shortTitle: z.string().optional(),
    description: z.string().max(200),
    category: z.enum(keys(CATEGORIES)),
    /** Extra categories the post is also listed under */
    alsoIn: z.array(z.enum(keys(CATEGORIES))).default([]),
    destinations: z.array(z.enum(keys(DESTINATIONS))).min(1),
    hero: z.enum(PHOTO_KEYS),
    author: z.enum(keys(AUTHORS)).default('desk'),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    featured: z.boolean().default(false),
    startHere: z.number().int().optional(),
    /** Paid placement: renders the "Advertisement feature" label */
    sponsored: z.boolean().default(false),
    /** Post contains health, entry, park-fee or safety facts: show the last-updated notice */
    factCheck: z.boolean().default(false),
    plan: z.object({
      operator: z.enum(keys(OPERATORS)),
      heading: z.string(),
      text: z.string(),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).min(1),
    }),
    sources: z
      .array(z.object({ title: z.string(), publisher: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { posts };
