---
slug: "cli/cli/color/detect_color_level"
package: "cli"
title: "detect_color_level"
description: "Colour level for a stream that is (tty) or is not a terminal, from the given values of the colour environment variables (None when a variable is unset)."
module: "cli::color"
kind: "fn"
name: "detect_color_level"
signature: "fn detect_color_level( bool tty, Option<string> no_color, Option<string> force_color, Option<string> colorterm, Option<string> term_name, ) -> ColorLevel"
import: "use cli::color::{detect_color_level};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/color.coil#L43"
order: 1
---

Colour level for a stream that is (`tty`) or is not a terminal, from the given values of the colour environment variables (`None` when a variable is unset).

`NO_COLOR` (any non-empty value) turns colour off; `FORCE_COLOR` turns
it on even off a terminal (`0` or `false` off, `1` basic, `2` 256, `3`
truecolor); `COLORTERM=truecolor|24bit`, a `TERM` ending in
`-256color` or `-direct`, or `TERM=dumb` refine the guess. Use
[`color_level_from_env`](/packages/cli/reference/cli/color/color_level_from_env) to read the real environment.

## Parameters

| Name | Type |
|------|------|
| `tty` | `bool` |
| `no_color` | `Option<string>` |
| `force_color` | `Option<string>` |
| `colorterm` | `Option<string>` |
| `term_name` | `Option<string>` |

## Returns

`ColorLevel`

## Examples

```coil
use cli::color::{ColorLevel, detect_color_level};
use tests::assert;
let none: Option<string> = Option::None;
let piped = detect_color_level(false, none, none, none, Option::Some("xterm"));
assert!(piped == ColorLevel::None);
let term = detect_color_level(true, none, none, Option::Some("truecolor"), none);
assert!(term == ColorLevel::TrueColor);
let off = detect_color_level(true, Option::Some("1"), none, none, none);
assert!(off == ColorLevel::None);
```

## See also

- [`cli::color::color_level_from_env`](/packages/cli/reference/cli/color/color_level_from_env)
