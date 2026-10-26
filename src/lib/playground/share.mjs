// Share links: the playground's files, compressed into the URL fragment, so a
// link carries the whole program and nothing is stored on a server.

const toBase64Url = (bytes) => {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const fromBase64Url = (text) =>
  Uint8Array.from(atob(text.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

async function pipe(bytes, stream) {
  return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
}

/** { files, stdin } → fragment text (without the "#"). */
export async function encodeShare(state) {
  const json = new TextEncoder().encode(JSON.stringify(state));
  return `code=${toBase64Url(await pipe(json, new CompressionStream("deflate-raw")))}`;
}

/** Fragment text → { files, stdin }, or undefined when it holds no program. */
export async function decodeShare(fragment) {
  const m = fragment.replace(/^#/, "").match(/(?:^|&)code=([\w-]+)/);
  if (!m) return undefined;
  try {
    const json = await pipe(fromBase64Url(m[1]), new DecompressionStream("deflate-raw"));
    const state = JSON.parse(new TextDecoder().decode(json));
    return state && typeof state.files === "object" ? state : undefined;
  } catch {
    return undefined;
  }
}
