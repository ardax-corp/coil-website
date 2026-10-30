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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L18"
order: 0
---

Bar glyphs. `partials` are the fractional cells from 1/n to (n-1)/n (may be empty for whole-cell bars).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `left` | `string` |  |
| `right` | `string` |  |
| `fill` | `string` |  |
| `empty` | `string` |  |
| `partials` | `Vec<string>` |  |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
