---
slug: "cli/cli/progress/BarStyle"
package: "cli"
title: "BarStyle"
description: "Bar glyphs. partials are the fractional cells from 1/n to (n-1)/n (may be empty for whole-cell bars)."
module: "cli::progress"
kind: "class"
name: "BarStyle"
signature: "class BarStyle"
import: "use cli::progress::{BarStyle};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.coil#L18"
order: 0
---

Bar glyphs. `partials` are the fractional cells from 1/n to (n-1)/n (may be empty for whole-cell bars).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `left` | `string` | Drawn before the bar. |
| `right` | `string` | Drawn after the bar. |
| `fill` | `string` | A full cell. |
| `empty` | `string` | An empty cell. |
| `partials` | `Vec<string>` | Partly filled cells, from 1/n to (n-1)/n full. |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
