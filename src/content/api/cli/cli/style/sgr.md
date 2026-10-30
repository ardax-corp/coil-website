---
slug: "cli/cli/style/sgr"
package: "cli"
title: "sgr"
description: "SGR escape that switches to s from the default attributes, at level. Empty when there is nothing to set."
module: "cli::style"
kind: "fn"
name: "sgr"
signature: "fn sgr(Style s, ColorLevel level) -> string"
import: "use cli::style::{sgr};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L424"
order: 7
---

SGR escape that switches to `s` from the default attributes, at `level`. Empty when there is nothing to set.

## Parameters

| Name | Type |
|------|------|
| `s` | `Style` |
| `level` | `ColorLevel` |

## Returns

`string`

## See also

- [`hex`](/packages/cli/reference/cli/style/hex): `#rrggbb`, `rrggbb`, `#rgb` or `rgb`.
- [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb): RGB of a 256-palette index.
- [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed): Nearest 256-palette index (6x6x6 cube or grey ramp).
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`downgrade`](/packages/cli/reference/cli/style/downgrade): `c` reduced to what `level` can show.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
- [`strip`](/packages/cli/reference/cli/style/strip): `text` without escape sequences (CSI, OSC, and two-byte ESC forms).
