---
slug: "cli/cli/color/color_level_from_env"
package: "cli"
title: "color_level_from_env"
description: "detect_color_level with the real environment. Needs --allow-env."
module: "cli::color"
kind: "fn"
name: "color_level_from_env"
signature: "fn color_level_from_env(bool tty) -> ColorLevel"
import: "use cli::color::{color_level_from_env};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/color.hy#L73"
order: 2
---

[`detect_color_level`](/packages/cli/reference/cli/color/detect_color_level) with the real environment. Needs `--allow-env`.

## Parameters

| Name | Type |
|------|------|
| `tty` | `bool` |

## Returns

`ColorLevel`

## See also

- [`cli::color::detect_color_level`](/packages/cli/reference/cli/color/detect_color_level)
