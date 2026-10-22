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

// API reference generated from the `///` docs in coil-lang and coil-stdlib by
// scripts/sync-reference.mjs. Ids are "<module path>/<item>[/<member>]" with
// `::` as `/`; a module's own page is "<module path>/index".
const reference = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.string(),
    kind: z.string(),
    name: z.string(),
    /** Owning type, for methods. */
    parent: z.string().optional(),
    signature: z.string().optional(),
    /** Every signature, for overloaded macros. */
    signatures: z.array(z.string()).optional(),
    import: z.string().optional(),
    origin: z.enum(["builtin", "embedded", "stdlib"]),
    /** Module pages: auto-imported, no `use` needed. */
    auto: z.boolean().optional(),
    source: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { blog, docs, ecosystem, reference };
