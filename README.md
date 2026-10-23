# coil-website

Public site for Coil.

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
