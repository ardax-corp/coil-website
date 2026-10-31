---
slug: "cli/cli/color/color_level_from_env"
package: "cli"
title: "color_level_from_env"
description: "detect_color_level with the real environment. Needs --allow-env. Pass stdout_is_tty() (from cli::term) for ordinary output."
module: "cli::color"
kind: "fn"
name: "color_level_from_env"
signature: "fn color_level_from_env(bool tty) -> ColorLevel"
import: "use cli::color::{color_level_from_env};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/color.coil#L93"
order: 2
---

[`detect_color_level`](/packages/cli/reference/cli/color/detect_color_level) with the real environment. Needs `--allow-env`. Pass `stdout_is_tty()` (from [`cli::term`](/packages/cli/reference/cli/term)) for ordinary output.

## Parameters

| Name | Type |
|------|------|
| `tty` | `bool` |

## Returns

`ColorLevel`

## See also

- [`cli::color::detect_color_level`](/packages/cli/reference/cli/color/detect_color_level)
- [`cli::term`](/packages/cli/reference/cli/term)
