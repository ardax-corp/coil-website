---
slug: "cli/cli/style/downgrade"
package: "cli"
title: "downgrade"
description: "c reduced to what level can show: RGB becomes the nearest palette or standard colour, palette entries above 15 the nearest standard one. ColorLevel::None gives Default."
module: "cli::style"
kind: "fn"
name: "downgrade"
signature: "fn downgrade(Color c, ColorLevel level) -> Color"
import: "use cli::style::{downgrade};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.hy#L458"
order: 36
---

`c` reduced to what `level` can show: RGB becomes the nearest palette or standard colour, palette entries above 15 the nearest standard one. `ColorLevel::None` gives `Default`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Color` |
| `level` | `ColorLevel` |

## Returns

`Color`

## Examples

```coil
use cli::style::{Color, color_eq, downgrade};
use cli::color::ColorLevel;
use tests::assert;
let orange = Color::Rgb(255, 135, 0);
assert!(color_eq(downgrade(orange, ColorLevel::Ansi256), Color::Indexed(208)));
assert!(color_eq(downgrade(orange, ColorLevel::None), Color::Default));
```

## See also

- [`black`](/packages/cli/reference/cli/style/black): Standard black (`Color::Ansi(0)`).
- [`red`](/packages/cli/reference/cli/style/red): Standard red (`Color::Ansi(1)`).
- [`green`](/packages/cli/reference/cli/style/green): Standard green (`Color::Ansi(2)`).
- [`yellow`](/packages/cli/reference/cli/style/yellow): Standard yellow (`Color::Ansi(3)`).
- [`blue`](/packages/cli/reference/cli/style/blue): Standard blue (`Color::Ansi(4)`).
- [`magenta`](/packages/cli/reference/cli/style/magenta): Standard magenta (`Color::Ansi(5)`).
- [`cyan`](/packages/cli/reference/cli/style/cyan): Standard cyan (`Color::Ansi(6)`).
- [`white`](/packages/cli/reference/cli/style/white): Standard white (`Color::Ansi(7)`).
