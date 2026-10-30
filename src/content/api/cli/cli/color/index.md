---
slug: "cli/cli/color/index"
package: "cli"
title: "cli::color"
description: "How many colours output may use, from the conventional environment variables."
module: "cli::color"
kind: "module"
name: "cli::color"
origin: "package"
auto: false
order: 2
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::color::{ColorLevel, detect_color_level};
```

## Types

| Name | Description |
|------|-------------|
| [`ColorLevel`](/packages/cli/reference/cli/color/ColorLevel) | How many colours output may use. |

## Functions

| Name | Description |
|------|-------------|
| [`detect_color_level`](/packages/cli/reference/cli/color/detect_color_level) | Colour level for a stream that is (`tty`) or is not a terminal. |
| [`color_level_from_env`](/packages/cli/reference/cli/color/color_level_from_env) | [`detect_color_level`](/packages/cli/reference/cli/color/detect_color_level) with the real environment. |
