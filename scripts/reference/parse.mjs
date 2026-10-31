// A small declaration parser for Coil sources: enough to pull out `///` docs,
// signatures and members for the reference. It does not understand bodies;
// it only skips them by matching braces (aware of strings and comments).

/** Skip a string literal starting at `i` (on the opening quote). */
function skipString(src, i) {
  const q = src[i];
  i++;
  while (i < src.length && src[i] !== q) {
    if (src[i] === "\\") i++;
    i++;
  }
  return i + 1;
}

/** Skip a block comment starting at `i` (on `/*`); block comments nest. */
function skipBlockComment(src, i) {
  let depth = 0;
  while (i < src.length) {
    if (src.startsWith("/*", i)) {
      depth++;
      i += 2;
    } else if (src.startsWith("*/", i)) {
      depth--;
      i += 2;
      if (depth === 0) return i;
    } else i++;
  }
  return i;
}

/** Index just past the `}` matching the `{` at `i`. */
export function skipBraces(src, i) {
  let depth = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '"') {
      i = skipString(src, i);
      continue;
    }
    if (src.startsWith("//", i)) {
      i = src.indexOf("\n", i);
      if (i < 0) return src.length;
      continue;
    }
    if (src.startsWith("/*", i)) {
      i = skipBlockComment(src, i);
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return i + 1;
    }
    i++;
  }
  return i;
}

const lineOf = (src, i) => src.slice(0, i).split("\n").length;

// Tokens after which a `{` belongs to the header (a record type, an effect
// set, a record literal in a contract), not the body.
const TYPE_BRACE_BEFORE = /(->|:|,|\(|<|=|\buses|\||&&|\|\||==|!=)\s*$/;

/**
 * Read a declaration header from `i` up to its body `{` or terminating `;`
 * (or, inside class/enum bodies, a `,`). Returns the header text with
 * comments removed, the stop character and the index of the stop.
 */
function readHeader(src, i, stops) {
  let depth = 0;
  let out = "";
  const paramDocs = [];
  while (i < src.length) {
    const c = src[i];
    if (c === '"') {
      const j = skipString(src, i);
      out += src.slice(i, j);
      i = j;
      continue;
    }
    if (src.startsWith("///", i)) {
      // A parameter doc comment inside a signature.
      const end = src.indexOf("\n", i);
      paramDocs.push({ at: out.length, text: src.slice(i + 3, end < 0 ? undefined : end).replace(/^ /, "") });
      i = end < 0 ? src.length : end;
      continue;
    }
    if (src.startsWith("//", i)) {
      i = src.indexOf("\n", i);
      if (i < 0) i = src.length;
      continue;
    }
    if (src.startsWith("/*", i)) {
      i = skipBlockComment(src, i);
      continue;
    }
    if (c === "(" || c === "[") depth++;
    else if (c === ")" || c === "]") depth--;
    else if (depth === 0 && c === "{") {
      if (TYPE_BRACE_BEFORE.test(out) || !stops.includes("{")) {
        const j = skipBraces(src, i);
        out += src.slice(i, j);
        i = j;
        continue;
      }
      return { text: out, stop: "{", at: i, paramDocs };
    } else if (depth === 0 && c === "<" && stops.includes(",")) {
      // Generic arguments in a field type: `Vec<(int, int)>` holds commas.
      let d = 0;
      let j = i;
      for (; j < src.length; j++) {
        if (src[j] === "<") d++;
        else if (src[j] === ">" && src[j - 1] !== "-") {
          d--;
          if (d === 0) break;
        }
      }
      out += src.slice(i, j + 1);
      i = j + 1;
      continue;
    } else if (depth === 0 && stops.includes(c)) {
      return { text: out, stop: c, at: i, paramDocs };
    } else if (depth < 0) {
      // A closing `}` of the container is handled by the caller.
    }
    if (depth === 0 && c === "}" && stops.includes("}")) return { text: out, stop: "}", at: i, paramDocs };
    out += c;
    i++;
  }
  return { text: out, stop: "", at: i, paramDocs };
}

const MODIFIERS = new Set(["pub", "static", "pure", "gen", "async", "readonly", "shared", "unsafe", "extern"]);
const KINDS = new Set(["fn", "class", "enum", "trait", "impl", "type", "const", "macro"]);

/** Split on top-level commas (outside (), [], {}, <>). */
export function splitTop(text, sep = ",") {
  const parts = [];
  let depth = 0;
  let cur = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if ("([{".includes(c)) depth++;
    else if (")]}".includes(c)) depth--;
    else if (c === "<") depth++;
    else if (c === ">" && text[i - 1] !== "-" && text[i - 1] !== "=") depth--;
    if (depth === 0 && c === sep) {
      parts.push(cur);
      cur = "";
    } else cur += c;
  }
  if (cur.trim()) parts.push(cur);
  return parts.map((p) => p.trim()).filter(Boolean);
}

/** Index of the `)` matching the `(` at `i`. */
function matchParen(text, i) {
  let depth = 0;
  for (; i < text.length; i++) {
    if (text[i] === "(") depth++;
    else if (text[i] === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const norm = (s) => s.replace(/\s+/g, " ").trim();

/** Parse a fn/macro header after the name: generics, params, return, clauses. */
function parseFnHeader(rest, paramDocs, headerOffset) {
  let generics = "";
  let i = 0;
  if (rest[0] === "<") {
    let d = 0;
    for (; i < rest.length; i++) {
      if (rest[i] === "<") d++;
      else if (rest[i] === ">" && rest[i - 1] !== "-") {
        d--;
        if (d === 0) break;
      }
    }
    generics = rest.slice(1, i);
    i++;
  }
  const open = rest.indexOf("(", i);
  const close = matchParen(rest, open);
  const paramText = rest.slice(open + 1, close);
  const params = splitTop(paramText).map((p) => {
    const t = norm(p);
    const m = t.match(/^(.*?)\s*\b([A-Za-z_][A-Za-z0-9_]*)$/);
    const rest = m ? m[1].trim() : t;
    const variadic = rest.endsWith("...");
    return {
      name: m ? m[2] : t,
      type: variadic ? rest.slice(0, -3).trim() : rest,
      rest: variadic,
    };
  });
  // Attach `///` parameter docs: each doc belongs to the next parameter.
  if (paramDocs.length) {
    let offset = headerOffset + open + 1;
    const starts = [];
    let depth = 0;
    let begin = 0;
    for (let k = 0; k < paramText.length; k++) {
      const c = paramText[k];
      if ("([{<".includes(c)) depth++;
      else if (")]}".includes(c) || (c === ">" && paramText[k - 1] !== "-")) depth--;
      if (depth === 0 && c === ",") {
        starts.push(offset + begin);
        begin = k + 1;
      }
    }
    starts.push(offset + begin);
    for (const d of paramDocs) {
      let idx = starts.findIndex((s, n) => d.at >= s && (n + 1 >= starts.length || d.at < starts[n + 1]));
      if (idx < 0) continue;
      const p = params[idx];
      if (p) p.doc = p.doc ? `${p.doc}\n${d.text}` : d.text;
    }
  }
  let tail = rest.slice(close + 1);
  const clauses = [];
  const clauseRe = /\b(uses|requires|ensures|where)\b/;
  const firstClause = tail.search(clauseRe);
  let ret = firstClause < 0 ? tail : tail.slice(0, firstClause);
  ret = norm(ret.replace(/^\s*->/, ""));
  if (firstClause >= 0) {
    const ctext = tail.slice(firstClause);
    const re = /\b(uses|requires|ensures|where)\b/g;
    const marks = [...ctext.matchAll(re)];
    for (let k = 0; k < marks.length; k++) {
      const s = marks[k].index;
      const e = k + 1 < marks.length ? marks[k + 1].index : ctext.length;
      clauses.push({ kind: marks[k][1], text: norm(ctext.slice(s + marks[k][1].length, e)) });
    }
  }
  return { generics: norm(generics), params, returns: ret || null, clauses };
}

/**
 * Parse items in `src[from, to)`. `container` is null (top level), "impl",
 * "trait", "class" or "enum".
 */
export function parseItems(src, from = 0, to = src.length, container = null) {
  const items = [];
  let docs = [];
  let attrs = [];
  // Plain `//` lines right above an item (no blank line): used as docs for
  // items that cannot carry `///`, such as module constants.
  let comment = [];
  let lastCommentEnd = -1;
  let i = from;
  const fieldMode = container === "class" || container === "enum";
  while (i < to) {
    const c = src[i];
    if (/\s/.test(c)) {
      // A blank line between a doc block and the next item ends the block
      // only for plain comments; keep `///` docs attached.
      i++;
      continue;
    }
    if (src.startsWith("///", i)) {
      const end = src.indexOf("\n", i);
      const line = src.slice(i + 3, end < 0 ? to : end);
      docs.push(line.startsWith(" ") ? line.slice(1) : line);
      i = end < 0 ? to : end + 1;
      continue;
    }
    if (src.startsWith("//", i)) {
      const end = src.indexOf("\n", i);
      const lineStart = src.lastIndexOf("\n", i - 1) + 1;
      if (lastCommentEnd !== lineStart) comment = [];
      comment.push(src.slice(i + 2, end < 0 ? to : end).replace(/^ /, ""));
      i = end < 0 ? to : end + 1;
      lastCommentEnd = i;
      continue;
    }
    if (src.startsWith("/*", i)) {
      i = skipBlockComment(src, i);
      continue;
    }
    if (src.startsWith("#[", i)) {
      let d = 0;
      let j = i + 1;
      for (; j < to; j++) {
        if (src[j] === "[") d++;
        else if (src[j] === "]") {
          d--;
          if (d === 0) break;
        }
      }
      attrs.push(src.slice(i, j + 1));
      i = j + 1;
      continue;
    }
    if (c === "}" || c === "," || c === ";") {
      i++;
      continue;
    }
    if (src.startsWith("use ", i) || src.startsWith("mod ", i)) {
      i = src.indexOf(";", i) + 1;
      docs = [];
      attrs = [];
      continue;
    }
    const start = i;
    const itemLineStart = src.lastIndexOf("\n", i - 1) + 1;
    const attached = lastCommentEnd === itemLineStart ? comment.join("\n").trim() : "";
    comment = [];
    const stops = fieldMode ? [",", "}"] : ["{", ";"];
    const h = readHeader(src, i, stops);
    const header = h.text;
    const line = lineOf(src, start);
    let bodyStart = -1;
    let bodyEnd = h.at + 1;
    if (h.stop === "{") {
      bodyStart = h.at;
      bodyEnd = skipBraces(src, h.at);
    } else if (h.stop === "}") {
      bodyEnd = h.at; // let the loop consume the container's `}`
    }
    i = Math.max(bodyEnd, start + 1);

    const item = { line, docs: docs.join("\n").trim(), comment: attached, attrs, ...classify(header, h.paramDocs, container) };
    docs = [];
    attrs = [];
    if (!item.kind) continue;
    if (bodyStart >= 0 && ["class", "enum", "trait", "impl"].includes(item.kind)) {
      item.members = parseItems(src, bodyStart + 1, bodyEnd - 1, item.kind);
    }
    item.hasBody = bodyStart >= 0 && /\S/.test(src.slice(bodyStart + 1, bodyEnd - 1));
    items.push(item);
  }
  return items;
}

function classify(header, paramDocs, container) {
  const text = header.trim();
  if (!text) return {};
  if (container === "enum") {
    const m = text.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(.*)$/s);
    if (!m) return {};
    return { kind: "variant", name: m[1], signature: norm(text), payload: norm(m[2]) || null };
  }
  if (container === "class") {
    const m = text.match(/^((?:pub\s+|const\s+|readonly\s+)*)([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/s);
    if (!m) return {};
    return {
      kind: "field",
      name: m[2],
      pub: /\bpub\b/.test(m[1]),
      type: norm(m[3]),
      signature: norm(text),
    };
  }
  // Leading text before the kind keyword: modifiers.
  const words = text.match(/^((?:[a-z]+\s+)*?)(fn|class|enum|trait|impl|type|const|macro)\b\s*(.*)$/s);
  if (!words) return {};
  const mods = words[1].split(/\s+/).filter(Boolean);
  if (mods.some((m) => !MODIFIERS.has(m) && m !== "const")) return {};
  let kind = words[2];
  const rest = words[3];
  const headerOffset = header.indexOf(rest);
  const base = { modifiers: mods, signature: norm(text), pub: mods.includes("pub") };
  if (kind === "fn" || kind === "macro") {
    const nm = rest.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(.*)$/s);
    if (!nm) return {};
    const parsed = parseFnHeader(nm[2], paramDocs, headerOffset + rest.indexOf(nm[2]));
    if (kind === "fn" && container) kind = mods.includes("static") ? "static method" : "method";
    // Contracts get their own section; the signature stops before them.
    const signature = norm(text.replace(/\b(requires|ensures)\b[^]*$/, ""));
    return { ...base, signature, kind, name: nm[1], ...parsed };
  }
  if (kind === "impl") {
    // `impl Foo<T>`, `impl Trait for Foo<T>`, `impl Foo<T: Bound>`.
    const m = rest.match(/^(.*?)\s+for\s+(.*)$/s);
    const target = norm(m ? m[2] : rest);
    return { ...base, kind, trait: m ? norm(m[1]) : null, target, name: target.replace(/<.*$/, "") };
  }
  if (kind === "const" && mods.length === 0 && /^fn\b/.test(rest)) return {};
  const nm = rest.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(.*)$/s);
  if (!nm) return {};
  let generics = "";
  const after = nm[2];
  if (after.startsWith("<")) {
    let d = 0;
    let k = 0;
    for (; k < after.length; k++) {
      if (after[k] === "<") d++;
      else if (after[k] === ">" && after[k - 1] !== "-") {
        d--;
        if (d === 0) break;
      }
    }
    generics = norm(after.slice(1, k));
  }
  const out = { ...base, kind, name: nm[1], generics };
  if (kind === "type") {
    const eq = after.indexOf("=");
    out.value = eq >= 0 ? norm(after.slice(eq + 1)) : null;
    if (container === "trait") out.kind = "associated type";
  }
  if (kind === "const") {
    const t = after.match(/^\s*:\s*([^=]+)=/);
    out.type = t ? norm(t[1]) : null;
    const value = norm(after.replace(/^[^=]*=/s, ""));
    out.signature = value.length <= 60 ? `${norm(text)};` : norm(text.replace(/=.*$/s, ""));
  }
  if (kind === "class") {
    const inv = [...after.matchAll(/\binvariant\b\s*([^]*?)(?=\binvariant\b|$)/g)].map((x) => norm(x[1]));
    out.invariants = inv;
    out.signature = norm(text.replace(/\binvariant\b[^]*$/, ""));
  }
  return out;
}

/** Split `///` docs into a summary, body and `# Section`s (rustdoc style). */
export function splitDocs(docs) {
  const lines = docs.split("\n");
  const sections = {};
  let current = "__body";
  const buf = { __body: [] };
  let fence = false;
  for (const line of lines) {
    if (/^\s*```/.test(line)) fence = !fence;
    const m = !fence && line.match(/^#\s+(.+?)\s*$/);
    if (m) {
      current = m[1];
      buf[current] = [];
      continue;
    }
    buf[current].push(line);
  }
  for (const [k, v] of Object.entries(buf)) {
    if (k !== "__body") sections[k] = v.join("\n").trim();
  }
  const body = buf.__body.join("\n").trim();
  const para = body.split(/\n\s*\n/);
  return { summary: (para[0] ?? "").replace(/\s*\n\s*/g, " ").trim(), body: para.slice(1).join("\n\n").trim(), sections };
}
