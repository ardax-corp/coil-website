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
