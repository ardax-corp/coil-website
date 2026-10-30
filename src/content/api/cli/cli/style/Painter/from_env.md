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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L491"
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

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints at a fixed colour level.
- [`Painter::at`](/packages/cli/reference/cli/style/Painter/at)
- [`Painter::enabled`](/packages/cli/reference/cli/style/Painter/enabled)
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint)
- [`Painter::color`](/packages/cli/reference/cli/style/Painter/color)
- [`Painter::bold`](/packages/cli/reference/cli/style/Painter/bold)
- [`Painter::dim`](/packages/cli/reference/cli/style/Painter/dim)
