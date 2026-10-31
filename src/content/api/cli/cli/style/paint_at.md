---
slug: "cli/cli/style/paint_at"
package: "cli"
title: "paint_at"
description: "text in style s at level, followed by a reset. At ColorLevel::None, or with nothing to set, text is returned as is, so piped output stays clean. Painter does the same with a stored level."
module: "cli::style"
kind: "fn"
name: "paint_at"
signature: "fn paint_at(Style s, string text, ColorLevel level) -> string"
import: "use cli::style::{paint_at};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.hy#L557"
order: 38
---

`text` in style `s` at `level`, followed by a reset. At `ColorLevel::None`, or with nothing to set, `text` is returned as is, so piped output stays clean. [`Painter`](/packages/cli/reference/cli/style/Painter) does the same with a stored level.

## Parameters

| Name | Type |
|------|------|
| `s` | `Style` |
| `text` | `string` |
| `level` | `ColorLevel` |

## Returns

`string`

## See also

- [`cli::style::Painter`](/packages/cli/reference/cli/style/Painter)
- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
