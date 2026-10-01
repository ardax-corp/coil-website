// Build-time search index for the ⌘K palette: every doc page and blog post,
// plus their h2/h3 headings so readers can jump straight to a section.

import type { APIRoute } from "astro";
import { getCollection, render } from "astro:content";
import { docHref, locate, plainTitle, resolveGroups } from "../lib/nav";
import { packages } from "../lib/packages";

export type SearchEntry = {
  /** Title */
  t: string;
  /** URL */
  u: string;
  /** Section label (nav group or "Blog") */
  s: string;
  /** Headings: [text, anchor] */
  h: [string, string][];
};

export const GET: APIRoute = async () => {
  const docs = await getCollection("docs");
  const groups = resolveGroups(docs);
  const entries: SearchEntry[] = [];

  for (const doc of docs) {
    const { headings } = await render(doc);
    const where = locate(groups, doc.id);
    entries.push({
      t: where?.item.label ?? plainTitle(doc.data.title),
      u: docHref(doc.id),
      s: where?.group.title ?? "Docs",
      h: headings
        .filter((h) => h.depth === 2 || h.depth === 3)
        .map((h) => [h.text, h.slug]),
    });
  }

  for (const post of await getCollection("blog")) {
    entries.push({ t: post.data.title, u: `/blog/${post.id}`, s: "Blog", h: [] });
  }

  for (const p of packages) {
    if (!p.docs) entries.push({ t: `${p.name} — ${p.summary}`, u: p.repo, s: "Packages", h: [] });
  }

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
};
