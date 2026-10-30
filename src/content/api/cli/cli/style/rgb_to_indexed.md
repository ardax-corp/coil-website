---
slug: "cli/cli/style/rgb_to_indexed"
package: "cli"
title: "rgb_to_indexed"
description: "Nearest 256-palette index (6x6x6 cube or grey ramp)."
module: "cli::style"
kind: "fn"
name: "rgb_to_indexed"
signature: "fn rgb_to_indexed(int r, int g, int b) -> int"
import: "use cli::style::{rgb_to_indexed};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L332"
order: 4
---

Nearest 256-palette index (6x6x6 cube or grey ramp).

## Parameters

| Name | Type |
|------|------|
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

## Returns

`int`

## See also

- [`hex`](/packages/cli/reference/cli/style/hex): `#rrggbb`, `rrggbb`, `#rgb` or `rgb`.
- [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb): RGB of a 256-palette index.
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`downgrade`](/packages/cli/reference/cli/style/downgrade): `c` reduced to what `level` can show.
- [`sgr`](/packages/cli/reference/cli/style/sgr): SGR escape that switches to `s` from the default attributes, at `level`.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
- [`strip`](/packages/cli/reference/cli/style/strip): `text` without escape sequences (CSI, OSC, and two-byte ESC forms).
