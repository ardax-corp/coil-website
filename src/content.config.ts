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

// Fields of a generated API page (scripts/sync-reference.mjs).
const apiPage = {
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
  /** Module pages: auto-imported, no `use` needed. */
  auto: z.boolean().optional(),
  source: z.string().url().optional(),
  order: z.number(),
};

// Language API reference generated from the `///` docs in coil-lang (the
// compiler's builtin doc stubs and embedded modules) by
// scripts/sync-reference.mjs. Ids are "<module path>/<item>[/<member>]" with
// `::` as `/`; a module's own page is "<module path>/index".
const reference = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reference" }),
  schema: z.object({ ...apiPage, origin: z.enum(["builtin", "embedded"]) }),
});

// API reference of coil-stdlib and the packages, generated the same way. Ids
// are "<package>/<module path>/<item>[/<member>]"; `package` is "stdlib" for
// coil-stdlib. Kept apart from `reference` so the language reference lists
// only what ships with the compiler.
const api = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/api" }),
  schema: z.object({ ...apiPage, origin: z.enum(["stdlib", "package"]), package: z.string() }),
});

export const collections = { blog, docs, ecosystem, reference, api };
