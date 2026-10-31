---
slug: "cli/cli/style/Painter"
package: "cli"
title: "Painter"
description: "Paints text at a fixed colour level. Painter::from_env(tty) reads the environment once (needs --allow-env); Painter::at takes the level as given, which keeps tests deterministic."
module: "cli::style"
kind: "class"
name: "Painter"
signature: "class Painter"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L584"
order: 2
---

Paints text at a fixed colour level. `Painter::from_env(tty)` reads the environment once (needs `--allow-env`); [`Painter::at`](/packages/cli/reference/cli/style/Painter/at) takes the level as given, which keeps tests deterministic.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ColorLevel` | The colour level everything is painted at. |

## Associated functions

| Name | Description |
|------|-------------|
| [`at`](/packages/cli/reference/cli/style/Painter/at) | A painter at `level`. |
| [`from_env`](/packages/cli/reference/cli/style/Painter/from_env) | Level from the environment for a stream that is (`tty`) or is not a terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`enabled`](/packages/cli/reference/cli/style/Painter/enabled) | Whether this painter writes any escapes (`level` is not `None`). |
| [`paint`](/packages/cli/reference/cli/style/Painter/paint) | `text` in style `s`, followed by a reset (see [`paint_at`](/packages/cli/reference/cli/style/paint_at)). |
| [`color`](/packages/cli/reference/cli/style/Painter/color) | `text` in foreground colour `c`. |
| [`bold`](/packages/cli/reference/cli/style/Painter/bold) | `text` in bold. |
| [`dim`](/packages/cli/reference/cli/style/Painter/dim) | `text` dimmed. |

## Examples

```coil
use cli::style::{Painter, fg, red, strip};
use cli::color::ColorLevel;
use tests::assert;
let p = Painter::at(ColorLevel::Basic);
let line = p.paint(fg(red()).bold(), "error");
assert!(line == "\e[1;31merror\e[0m");
assert!(strip(line) == "error");
assert!(Painter::at(ColorLevel::None).bold("ok") == "ok");
```

## See also

- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at)
- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
