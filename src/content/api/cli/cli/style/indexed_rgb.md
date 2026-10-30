---
slug: "cli/cli/style/indexed_rgb"
package: "cli"
title: "indexed_rgb"
description: "RGB of a 256-palette index."
module: "cli::style"
kind: "fn"
name: "indexed_rgb"
signature: "fn indexed_rgb(int i) -> (int, int, int)"
import: "use cli::style::{indexed_rgb};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L301"
order: 3
---

RGB of a 256-palette index.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`(int, int, int)`

## See also

- [`hex`](/packages/cli/reference/cli/style/hex): `#rrggbb`, `rrggbb`, `#rgb` or `rgb`.
- [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed): Nearest 256-palette index (6x6x6 cube or grey ramp).
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`downgrade`](/packages/cli/reference/cli/style/downgrade): `c` reduced to what `level` can show.
- [`sgr`](/packages/cli/reference/cli/style/sgr): SGR escape that switches to `s` from the default attributes, at `level`.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
- [`strip`](/packages/cli/reference/cli/style/strip): `text` without escape sequences (CSI, OSC, and two-byte ESC forms).
