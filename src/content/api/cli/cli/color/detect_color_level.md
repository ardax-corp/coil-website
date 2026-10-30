---
slug: "cli/cli/color/detect_color_level"
package: "cli"
title: "detect_color_level"
description: "Colour level for a stream that is (tty) or is not a terminal. NO_COLOR (any non-empty value) turns colour off; FORCE_COLOR turns it on even off a terminal (0 off, 1 basic, 2 256, 3 truecolor); COLORTERM=truecolor|24bit, a TERM ending in -256color, or TERM=dumb refine the guess."
module: "cli::color"
kind: "fn"
name: "detect_color_level"
signature: "fn detect_color_level( bool tty, Option<string> no_color, Option<string> force_color, Option<string> colorterm, Option<string> term_name, ) -> ColorLevel"
import: "use cli::color::{detect_color_level};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/color.hy#L24"
order: 1
---

Colour level for a stream that is (`tty`) or is not a terminal. `NO_COLOR` (any non-empty value) turns colour off; `FORCE_COLOR` turns it on even off a terminal (`0` off, `1` basic, `2` 256, `3` truecolor); `COLORTERM=truecolor|24bit`, a `TERM` ending in `-256color`, or `TERM=dumb` refine the guess.

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

## See also

- [`color_level_from_env`](/packages/cli/reference/cli/color/color_level_from_env): `detect_color_level` with the real environment.
