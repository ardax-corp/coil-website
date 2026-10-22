// Build-time search index for the ⌘K palette: every doc page, package page
// and blog post, plus h2/h3 headings so readers can jump straight to a section.

import type { APIRoute } from "astro";
import { getCollection, render } from "astro:content";
import { allGroups, docHref, locate, packageHref, plainTitle, referenceHref } from "../lib/nav";

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
  const ecosystem = await getCollection("ecosystem");
  const groups = allGroups(docs, ecosystem);
  const entries: SearchEntry[] = [];

  const pages = [
    ...docs.map((d) => ({ entry: d, href: docHref(d.id), fallback: "Docs" })),
    ...ecosystem.map((e) => ({ entry: e, href: packageHref(e.id), fallback: "Packages" })),
  ];
  for (const { entry, href, fallback } of pages) {
    const { headings } = await render(entry);
    const where = locate(groups, href);
    const label = where?.item.label ?? plainTitle(entry.data.title);
    const isPackage = where?.group.track === "packages";
    entries.push({
      // Package pages are named by package ("json — Install & use"), not "Overview".
      t: isPackage ? `${where!.group.title} — ${label}` : label,
      u: href,
      s: isPackage ? "Packages" : (where?.group.title ?? fallback),
      h: headings
        .filter((h) => h.depth === 2 || h.depth === 3)
        .map((h) => [h.text, h.slug]),
    });
  }

  // API reference: one entry per item, named by its path (`io::open`,
  // `Vec::push`) so either part finds it.
  for (const e of await getCollection("reference")) {
    const d = e.data;
    const name = d.kind === "macro" ? `${d.name}!` : d.name;
    const auto = d.module === "types" || d.module === "keywords" || d.module === "prelude" || d.module.startsWith("prelude::");
    const t =
      d.kind === "module" ? d.module : d.parent ? `${d.parent}::${name}` : auto ? name : `${d.module}::${name}`;
    const kind = d.kind === "static method" ? "fn" : d.kind;
    entries.push({ t, u: referenceHref(e.id), s: `Reference · ${kind}`, h: [] });
  }

  for (const post of await getCollection("blog")) {
    entries.push({ t: post.data.title, u: `/blog/${post.id}`, s: "Blog", h: [] });
  }

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
};
