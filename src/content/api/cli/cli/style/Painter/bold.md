---
slug: "cli/cli/style/Painter/bold"
package: "cli"
title: "Painter::bold"
description: "text in bold."
module: "cli::style"
kind: "method"
name: "bold"
parent: "Painter"
signature: "pub fn bold(string text) -> string"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L619"
order: 5
---

`text` in bold.

Called on a `Painter` value as `value.bold(…)`.

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
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim): `text` dimmed.
