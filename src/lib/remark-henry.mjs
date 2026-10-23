// Henry the nautilus, in his scholar's hat, presents the challenges at the end
// of each tutorial chapter. Two blockquote markers call him up:
//
//   > [!henry]                      Henry introduces the challenges: his
//   > Text Henry says.              sticker next to a speech bubble.
//
//   > [!hint]                       A hint, folded away until the reader
//   > The caveat to watch for.      opens it.
//
// Styles live in src/styles/prose.css.

const ART = {
  henry: { src: "/brand/henry/henry-scholar.svg", width: 150, height: 122 },
  hint: { src: "/brand/henry/henry-scholar-hint.svg", width: 44, height: 36 },
};

const el = (tagName, className, children, extra = {}) => ({
  type: "henry",
  data: { hName: tagName, hProperties: { className: className ? [className] : undefined, ...extra } },
  children,
});
const text = (value) => ({ type: "text", value });
const art = (kind, className) =>
  el("img", className, [], { src: ART[kind].src, alt: "", width: ART[kind].width, height: ART[kind].height, loading: "lazy" });

/** The marker a blockquote starts with ("henry", "hint"), removed from its text. */
function takeMarker(quote) {
  const para = quote.children[0];
  const first = para?.type === "paragraph" ? para.children[0] : undefined;
  const m = first?.type === "text" && first.value.match(/^\[!(henry|hint)\]\s*/);
  if (!m) return undefined;
  first.value = first.value.slice(m[0].length);
  if (!first.value) para.children.shift();
  if (!para.children.length) quote.children.shift();
  return m[1];
}

function transform(node) {
  if (node.type !== "blockquote") return node;
  const kind = takeMarker(node);
  if (kind === "henry") {
    return el("aside", "henry-says", [art("henry", "henry-art"), el("div", "henry-bubble", node.children)], {
      ariaLabel: "Henry's challenges",
    });
  }
  if (kind === "hint") {
    return el("details", "henry-hint", [
      el("summary", null, [art("hint", "henry-hint-art"), text("Henry's hint")]),
      el("div", "henry-hint-body", node.children),
    ]);
  }
  return node;
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map(transform);
  for (const child of node.children) walk(child);
}

export function remarkHenry() {
  return (tree) => walk(tree);
}
