---
slug: "cli/cli/style/Painter/color"
package: "cli"
title: "Painter::color"
description: "Method Painter::color."
module: "cli::style"
kind: "method"
name: "color"
parent: "Painter"
signature: "pub fn color(Color c, string text) -> string"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L505"
order: 4
---

*No documentation yet.*

Called on a `Painter` value as `value.color(…)`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Color` |
| `text` | `string` |

## Returns

`string`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at)
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled)
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint)
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold)
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim)
