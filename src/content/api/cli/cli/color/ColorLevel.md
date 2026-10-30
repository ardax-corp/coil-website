---
slug: "cli/cli/color/ColorLevel"
package: "cli"
title: "ColorLevel"
description: "How many colours output may use."
module: "cli::color"
kind: "enum"
name: "ColorLevel"
signature: "enum ColorLevel"
import: "use cli::color::{ColorLevel};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/color.hy#L9"
order: 0
---

How many colours output may use.

## Variants

### `None = 0` {#variant-none}

### `Basic = 1` {#variant-basic}

The 16 standard ANSI colours.

### `Ansi256 = 2` {#variant-ansi256}

The xterm 256-colour palette.

### `TrueColor = 3` {#variant-truecolor}

24-bit RGB.
