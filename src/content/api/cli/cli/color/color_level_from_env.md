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
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/color.hy#L93"
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
