---
slug: "cli/cli/style/Color"
package: "cli"
title: "Color"
description: "A terminal colour, in one of the forms an SGR escape can name. downgrade (and painting at a ColorLevel) reduces it to what the terminal can show. Compare colours with color_eq."
module: "cli::style"
kind: "enum"
name: "Color"
signature: "enum Color"
import: "use cli::style::{Color};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L19"
order: 0
---

A terminal colour, in one of the forms an SGR escape can name. [`downgrade`](/packages/cli/reference/cli/style/downgrade) (and painting at a `ColorLevel`) reduces it to what the terminal can show. Compare colours with [`color_eq`](/packages/cli/reference/cli/style/color_eq).

## Variants

### `Default` {#variant-default}

The terminal's own foreground / background.

### `Ansi(int)` {#variant-ansi}

One of the 16 standard colours: 0-7 normal, 8-15 bright.

### `Indexed(int)` {#variant-indexed}

xterm 256-colour palette index.

### `Rgb(int, int, int)` {#variant-rgb}

24-bit colour, each channel 0-255.

## Examples

```coil
use cli::style::{Color, color_eq, hex, rgb};
use tests::assert;
assert!(color_eq(rgb(300, 0, -5), Color::Rgb(255, 0, 0)));
let teal = hex("#008080") ?? Color::Default;
assert!(color_eq(teal, Color::Rgb(0, 128, 128)));
```

## See also

- [`cli::style::downgrade`](/packages/cli/reference/cli/style/downgrade)
- [`cli::style::color_eq`](/packages/cli/reference/cli/style/color_eq)
