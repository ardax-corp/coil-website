---
slug: "cli/cli/style/Color"
package: "cli"
title: "Color"
description: "Enum Color."
module: "cli::style"
kind: "enum"
name: "Color"
signature: "enum Color"
import: "use cli::style::{Color};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L6"
order: 10
---

## Variants

### `Default` {#variant-default}

The terminal's own foreground / background.

### `Ansi(int)` {#variant-ansi}

One of the 16 standard colours: 0-7 normal, 8-15 bright.

### `Indexed(int)` {#variant-indexed}

xterm 256-colour palette index.

### `Rgb(int, int, int)` {#variant-rgb}

24-bit colour, each channel 0-255.
