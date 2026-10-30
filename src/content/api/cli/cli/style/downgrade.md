---
slug: "cli/cli/style/downgrade"
package: "cli"
title: "downgrade"
description: "c reduced to what level can show. ColorLevel::None gives Default."
module: "cli::style"
kind: "fn"
name: "downgrade"
signature: "fn downgrade(Color c, ColorLevel level) -> Color"
import: "use cli::style::{downgrade};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L369"
order: 6
---

`c` reduced to what `level` can show. `ColorLevel::None` gives `Default`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Color` |
| `level` | `ColorLevel` |

## Returns

`Color`

## See also

- [`hex`](/packages/cli/reference/cli/style/hex): `#rrggbb`, `rrggbb`, `#rgb` or `rgb`.
- [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb): RGB of a 256-palette index.
- [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed): Nearest 256-palette index (6x6x6 cube or grey ramp).
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`sgr`](/packages/cli/reference/cli/style/sgr): SGR escape that switches to `s` from the default attributes, at `level`.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
- [`strip`](/packages/cli/reference/cli/style/strip): `text` without escape sequences (CSI, OSC, and two-byte ESC forms).
