import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Package docs synced from ardax-corp repositories by scripts/sync-packages.mjs,
// plus hand-written pages (no `source`). Ids are "<package>/<page>".
const ecosystem = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ecosystem" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Upstream file this page was synced from, pinned to a commit. */
    source: z.string().url().optional(),
    /** Sidebar position for hand-written pages. */
    order: z.number().optional(),
  }),
});

export const collections = { blog, docs, ecosystem };
