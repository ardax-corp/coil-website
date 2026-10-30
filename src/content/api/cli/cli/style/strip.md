---
slug: "cli/cli/style/strip"
package: "cli"
title: "strip"
description: "text without escape sequences (CSI, OSC, and two-byte ESC forms)."
module: "cli::style"
kind: "fn"
name: "strip"
signature: "fn strip(string text) -> string"
import: "use cli::style::{strip};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L519"
order: 9
---

`text` without escape sequences (CSI, OSC, and two-byte ESC forms).

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`string`

## See also

- [`hex`](/packages/cli/reference/cli/style/hex): `#rrggbb`, `rrggbb`, `#rgb` or `rgb`.
- [`indexed_rgb`](/packages/cli/reference/cli/style/indexed_rgb): RGB of a 256-palette index.
- [`rgb_to_indexed`](/packages/cli/reference/cli/style/rgb_to_indexed): Nearest 256-palette index (6x6x6 cube or grey ramp).
- [`rgb_to_ansi`](/packages/cli/reference/cli/style/rgb_to_ansi): Nearest of the 16 standard colours.
- [`downgrade`](/packages/cli/reference/cli/style/downgrade): `c` reduced to what `level` can show.
- [`sgr`](/packages/cli/reference/cli/style/sgr): SGR escape that switches to `s` from the default attributes, at `level`.
- [`paint_at`](/packages/cli/reference/cli/style/paint_at): `text` in style `s`, followed by a reset.
