---
slug: "cli/cli/style/Painter/enabled"
package: "cli"
title: "Painter::enabled"
description: "Whether this painter writes any escapes (level is not None)."
module: "cli::style"
kind: "method"
name: "enabled"
parent: "Painter"
signature: "pub fn enabled() -> bool"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L602"
order: 2
---

Whether this painter writes any escapes (`level` is not `None`).

Called on a `Painter` value as `value.enabled(…)`.

## Returns

`bool`

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints text at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at): A painter at `level`.
- [`Painter::from_env`](/packages/cli/reference/cli/style/Painter/from_env): Level from the environment for a stream that is (`tty`) or is not a terminal.
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint): `text` in style `s`, followed by a reset (see `paint_at`).
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color): `text` in foreground colour `c`.
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold): `text` in bold.
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim): `text` dimmed.
