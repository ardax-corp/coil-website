---
slug: "cli/cli/style/Painter"
package: "cli"
title: "Painter"
description: "Paints at a fixed colour level. Painter::from_env(tty) reads the environment once (needs --allow-env)."
module: "cli::style"
kind: "class"
name: "Painter"
signature: "class Painter"
import: "use cli::style::{Painter};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L480"
order: 1
---

Paints at a fixed colour level. `Painter::from_env(tty)` reads the environment once (needs `--allow-env`).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ColorLevel` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`at`](/packages/cli/reference/cli/style/Painter/at) |  |
| [`from_env`](/packages/cli/reference/cli/style/Painter/from_env) | Level from the environment for a stream that is (`tty`) or is not a terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`enabled`](/packages/cli/reference/cli/style/Painter/enabled) |  |
| [`paint`](/packages/cli/reference/cli/style/Painter/paint) |  |
| [`color`](/packages/cli/reference/cli/style/Painter/color) |  |
| [`bold`](/packages/cli/reference/cli/style/Painter/bold) |  |
| [`dim`](/packages/cli/reference/cli/style/Painter/dim) |  |

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
