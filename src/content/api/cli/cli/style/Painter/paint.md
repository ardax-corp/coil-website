---
slug: "cli/cli/style/Painter/paint"
package: "cli"
title: "Painter::paint"
description: "text in style s, followed by a reset (see paint_at)."
module: "cli::style"
kind: "method"
name: "paint"
parent: "Painter"
signature: "pub fn paint(Style s, string text) -> string"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L607"
order: 3
---

`text` in style `s`, followed by a reset (see [`paint_at`](/packages/cli/reference/cli/style/paint_at)).

Called on a `Painter` value as `value.paint(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Style` |
| `text` | `string` |

## Returns

`string`

## See also

- [`cli::style::paint_at`](/packages/cli/reference/cli/style/paint_at)
- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints text at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at): A painter at `level`.
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled): Whether this painter writes any escapes (`level` is not `None`).
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color): `text` in foreground colour `c`.
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold): `text` in bold.
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim): `text` dimmed.
