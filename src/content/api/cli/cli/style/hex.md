---
slug: "cli/cli/style/hex"
package: "cli"
title: "hex"
description: "An RGB colour from #rrggbb, rrggbb, #rgb or rgb (either case). None for any other length or a non-hex digit."
module: "cli::style"
kind: "fn"
name: "hex"
signature: "fn hex(string s) -> Option<Color>"
import: "use cli::style::{hex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L141"
order: 20
---

An RGB colour from `#rrggbb`, `rrggbb`, `#rgb` or [`rgb`](/packages/cli/reference/cli/style/rgb) (either case). `None` for any other length or a non-hex digit.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Option<Color>`

## See also

- [`cli::style::rgb`](/packages/cli/reference/cli/style/rgb)
- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
