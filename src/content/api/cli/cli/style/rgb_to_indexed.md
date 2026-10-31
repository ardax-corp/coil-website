---
slug: "cli/cli/style/rgb_to_indexed"
package: "cli"
title: "rgb_to_indexed"
description: "Nearest 256-palette index (6x6x6 cube or grey ramp)."
module: "cli::style"
kind: "fn"
name: "rgb_to_indexed"
signature: "fn rgb_to_indexed(int r, int g, int b) -> int"
import: "use cli::style::{rgb_to_indexed};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L408"
order: 34
---

Nearest 256-palette index (6x6x6 cube or grey ramp).

## Parameters

| Name | Type |
|------|------|
| `r` | `int` |
| `g` | `int` |
| `b` | `int` |

## Returns

`int`

## See also

- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
- [`white`](/packages/cli/reference/cli/style/white): Standard white (`Color::Ansi(7)`).
