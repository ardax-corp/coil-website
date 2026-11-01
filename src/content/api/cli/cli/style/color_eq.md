---
slug: "cli/cli/style/color_eq"
package: "cli"
title: "color_eq"
description: "Whether a and b are the same colour in the same form (Ansi(1) and its RGB value are different)."
module: "cli::style"
kind: "fn"
name: "color_eq"
signature: "fn color_eq(Color a, Color b) -> bool"
import: "use cli::style::{color_eq};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L329"
order: 32
---

Whether `a` and `b` are the same colour in the same form (`Ansi(1)` and its RGB value are different).

## Parameters

| Name | Type |
|------|------|
| `a` | `Color` |
| `b` | `Color` |

## Returns

`bool`

## See also

- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
- [`white`](/packages/cli/reference/cli/style/white): Standard white (`Color::Ansi(7)`).
