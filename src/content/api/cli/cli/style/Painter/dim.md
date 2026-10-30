---
slug: "cli/cli/style/Painter/dim"
package: "cli"
title: "Painter::dim"
description: "Method Painter::dim."
module: "cli::style"
kind: "method"
name: "dim"
parent: "Painter"
signature: "pub fn dim(string text) -> string"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L513"
order: 6
---

*No documentation yet.*

Called on a `Painter` value as `value.dim(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`string`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at)
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled)
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint)
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color)
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold)
