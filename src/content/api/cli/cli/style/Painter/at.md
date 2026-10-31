---
slug: "cli/cli/style/Painter/at"
package: "cli"
title: "Painter::at"
description: "A painter at level."
module: "cli::style"
kind: "static method"
name: "at"
parent: "Painter"
signature: "pub static fn at(ColorLevel level) -> Painter"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L591"
order: 0
---

A painter at `level`.

## Parameters

| Name | Type |
|------|------|
| `level` | `ColorLevel` |

## Returns

`Painter`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints text at a fixed colour level.
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled): Whether this painter writes any escapes (`level` is not `None`).
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint): `text` in style `s`, followed by a reset (see `paint_at`).
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color): `text` in foreground colour `c`.
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold): `text` in bold.
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim): `text` dimmed.
