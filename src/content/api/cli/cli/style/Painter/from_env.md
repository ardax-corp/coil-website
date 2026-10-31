---
slug: "cli/cli/style/Painter/from_env"
package: "cli"
title: "Painter::from_env"
description: "Level from the environment for a stream that is (tty) or is not a terminal. Needs --allow-env."
module: "cli::style"
kind: "static method"
name: "from_env"
parent: "Painter"
signature: "pub static fn from_env(bool tty) -> Painter"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L597"
order: 1
---

Level from the environment for a stream that is (`tty`) or is not a terminal. Needs `--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `tty` | `bool` |

## Returns

`Painter`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints text at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at): A painter at `level`.
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled): Whether this painter writes any escapes (`level` is not `None`).
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint): `text` in style `s`, followed by a reset (see `paint_at`).
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color): `text` in foreground colour `c`.
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold): `text` in bold.
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim): `text` dimmed.
