---
slug: "cli/cli/style/hex"
package: "cli"
title: "hex"
description: "#rrggbb, rrggbb, #rgb or rgb."
module: "cli::style"
kind: "fn"
name: "hex"
signature: "fn hex(string s) -> Option<Color>"
import: "use cli::style::{hex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L110"
order: 2
---

`#rrggbb`, `rrggbb`, `#rgb` or `rgb`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Option<Color>`

## See also

- [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb): RGB of a 256-palette index.
- [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed): Nearest 256-palette index (6x6x6 cube or grey ramp).
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`downgrade`](/packages/cli/reference/cli/style/downgrade): `c` reduced to what `level` can show.
- [`sgr`](/packages/cli/reference/cli/style/sgr): SGR escape that switches to `s` from the default attributes, at `level`.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
- [`strip`](/packages/cli/reference/cli/style/strip): `text` without escape sequences (CSI, OSC, and two-byte ESC forms).
