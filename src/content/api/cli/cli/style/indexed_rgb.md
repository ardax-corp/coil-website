---
slug: "cli/cli/style/indexed_rgb"
package: "cli"
title: "indexed_rgb"
description: "RGB of a 256-palette index, using the xterm defaults for 0-15."
module: "cli::style"
kind: "fn"
name: "indexed_rgb"
signature: "fn indexed_rgb(int i) -> (int, int, int)"
import: "use cli::style::{indexed_rgb};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L377"
order: 33
---

RGB of a 256-palette index, using the xterm defaults for 0-15.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`(int, int, int)`

## See also

- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
- [`white`](/packages/cli/reference/cli/style/white): Standard white (`Color::Ansi(7)`).
