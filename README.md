# coil-website

Public site for Coil.

Henry the nautilus is Coil's mascot. The sticker art is in `public/brand/henry/`
(served at `/brand/henry/…`): `henry-neutral`, `-happy` (success), `-confused`
(errors, the 404 page) and `-sleeping` (empty states), as SVGs with a
transparent background, plus a 2339×1878 `henry-neutral.png`.
`henry-scholar` (mortarboard) and `henry-scholar-hint` (mortarboard and light
bulb) present the challenges at the end of each tutorial chapter; they are
generated from the neutral sticker by `node scripts/henry-scholar.mjs`.
In docs markdown, a blockquote starting with `[!henry]` shows Henry with a
speech bubble and one starting with `[!hint]` a folded hint
(`src/lib/remark-henry.mjs`).

```bash
npm install
npm run build
```

## Playground

`/playground`, the Run and Edit buttons under docs examples, and the editors on
the tutorial challenges all run the coil compiler in the browser, built for
`wasm32-wasip1`, in a Web Worker over an in-memory file system
(`src/lib/playground/`). Nothing runs on a server.

A second worker checks the code as you type: it runs `coil compile --log-lsp`
and the playground and challenge editors underline what it reports
(`diagnostics.mjs`). The playground's Inspect tab shows `coil dissect` output
(bytecode, HIR, MIR, IL, effects, AST, macro expansion) from the same worker
(`inspect.mjs`); it needs a compiler built after coil-lang#2040.

`npm run build` first runs `scripts/sync-playground.mjs`, which downloads the
compiler from coil-lang's `edge` release (`coil-wasm32-wasip1.wasm`) and the
stdlib sources from coil-stdlib `main` into `public/playground/` (not
committed). If the download fails the build still succeeds and the playground
says it is unavailable. With local builds:

```bash
node scripts/sync-playground.mjs --wasm ../coil-lang/target/wasm32-wasip1/release/coil.wasm \
  --stdlib ../coil-stdlib/src
```

`COIL_PLAYGROUND_TAG` picks another coil-lang release than `edge`.

The challenges at the end of each tutorial chapter are code blocks with
`challenge=ID` (starter files), `check=ID` (hidden test cases) and
`expect=ID` (hidden expected output); `src/lib/remark-challenges.mjs` lists
the forms. Every challenge with a check has a reference solution in
`scripts/challenges/`, and `scripts/check-challenges.mjs` makes sure each one
passes and each starter does not yet:

```bash
node scripts/check-challenges.mjs --coil ../coil-lang/target/release/coil \
  --stdlib ../coil-stdlib/src src/content/docs/manual/tutorial/*.md
```

Both checkers also take `--coil scripts/coil-wasm.mjs`, a stand-in for `coil`
that runs the synced WebAssembly build the way the browser does.

## Brand assets

The Coil mark is the schematic symbol for an inductor, in copper on graphite.
Source shape: `COIL_PATH` in `src/lib/logo.ts`. Exported files live in
`public/brand/` (served at `/brand/…`):

| File | Use |
|---|---|
| `coil-mark.svg`, `coil-mark-512.png` | App icon / avatar (rounded graphite tile) |
| `coil-symbol-dark-bg.svg` | Bare symbol on dark backgrounds (`#eb8a52`) |
| `coil-symbol-light-bg.svg` | Bare symbol on light backgrounds (`#b8541e`) |
| `coil-wordmark-*-bg.svg` | Symbol + "coil"; text is live and set in Geist, so it falls back to system sans where Geist isn't installed |

Favicons: `public/favicon.svg`, `favicon.ico` (16/32/48), `apple-touch-icon.png`,
`icon-192.png`, `icon-512.png`, wired up in `src/layouts/Base.astro` with
`site.webmanifest`.
