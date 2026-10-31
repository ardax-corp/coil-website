---
slug: "cli/cli/style/rgb_to_ansi"
package: "cli"
title: "rgb_to_ansi"
description: "Nearest of the 16 standard colours."
module: "cli::style"
kind: "fn"
name: "rgb_to_ansi"
signature: "fn rgb_to_ansi(int r, int g, int b) -> int"
import: "use cli::style::{rgb_to_ansi};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L429"
order: 35
---

Nearest of the 16 standard colours.

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
