---
slug: "tui/tui/theme/index"
package: "tui"
title: "tui::theme"
description: "The tui::theme module."
module: "tui::theme"
kind: "module"
name: "tui::theme"
origin: "package"
auto: false
order: 7
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::theme::{Theme, default_theme};
```

## Types

| Name | Description |
|------|-------------|
| [`Theme`](/packages/tui/reference/tui/theme/Theme) | The styles widgets use unless they are given their own. |

## Functions

| Name | Description |
|------|-------------|
| [`default_theme`](/packages/tui/reference/tui/theme/default_theme) | Basic colours plus bold, dim, underline and reverse, so it reads on any terminal and in monochrome. |
