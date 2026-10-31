---
slug: "cli/cli/style/Painter/dim"
package: "cli"
title: "Painter::dim"
description: "text dimmed."
module: "cli::style"
kind: "method"
name: "dim"
parent: "Painter"
signature: "pub fn dim(string text) -> string"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.hy#L624"
order: 6
---

`text` dimmed.

Called on a `Painter` value as `value.dim(…)`.

## Parameters

| Name | Type |
|------|------|
| `text` | `string` |

## Returns

`string`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints text at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at): A painter at `level`.
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled): Whether this painter writes any escapes (`level` is not `None`).
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint): `text` in style `s`, followed by a reset (see `paint_at`).
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color): `text` in foreground colour `c`.
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold): `text` in bold.
