import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import coilGrammar from "./src/lib/coil.tmLanguage.json" with { type: "json" };
import { coilDark, coilLight } from "./src/lib/shiki-themes.ts";
import { redirects } from "./src/lib/redirects.mjs";
import { remarkHenry } from "./src/lib/remark-henry.mjs";
import { remarkChallenges } from "./src/lib/remark-challenges.mjs";
import { remarkSeeAlso } from "./src/lib/remark-see-also.mjs";

function walk(node, fn, parent) {
  fn(node, parent);
  if (node.children) {
    // Copy: fn may replace children while we iterate.
    for (const child of [...node.children]) walk(child, fn, node);
  }
}

// Honours explicit heading ids written as `## Title {#id}` (used by the synced
// docs). Must run before rehypeHeadingIds, which keeps an existing id.
function rehypeExplicitHeadingIds() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== "element" || !/^h[1-6]$/.test(node.tagName)) return;
      const last = node.children.at(-1);
      const m = last?.type === "text" && last.value.match(/\s*\{#([\w-]+)\}\s*$/);
      if (!m) return;
      last.value = last.value.slice(0, m.index);
      node.properties = { ...node.properties, id: m[1] };
    });
  };
}

// Appends a "#" permalink to h2–h4 so sections can be linked directly.
function rehypeHeadingAnchors() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== "element" || !/^h[2-4]$/.test(node.tagName)) return;
      const id = node.properties?.id;
      if (!id) return;
      node.children.push({
        type: "element",
        tagName: "a",
        properties: { className: ["heading-anchor"], href: `#${id}`, ariaLabel: "Link to this section" },
        children: [{ type: "text", value: "#" }],
      });
    });
  };
}

// Wraps tables so wide ones scroll horizontally instead of breaking layout.
function rehypeTableWrap() {
  return (tree) => {
    walk(tree, (node, parent) => {
      if (node.type !== "element" || node.tagName !== "table" || !parent) return;
      if (parent.properties?.className?.includes("table-wrap")) return;
      const i = parent.children.indexOf(node);
      parent.children[i] = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-wrap"] },
        children: [node],
      };
    });
  };
}

// Keeps a code fence's info after the language (```coil no_run file=x.hy) as
// data-meta on the <pre>, for the Run buttons (src/lib/playground/).
const fenceMeta = {
  pre(node) {
    const meta = this.options.meta?.__raw;
    if (meta) node.properties["data-meta"] = meta;
  },
};

export default defineConfig({
  redirects,
  markdown: {
    shikiConfig: {
      langs: [coilGrammar],
      themes: { light: coilLight, dark: coilDark },
      defaultColor: false,
      transformers: [fenceMeta],
    },
    remarkPlugins: [remarkHenry, remarkChallenges, remarkSeeAlso],
    rehypePlugins: [rehypeExplicitHeadingIds, rehypeHeadingIds, rehypeHeadingAnchors, rehypeTableWrap],
  },
});
