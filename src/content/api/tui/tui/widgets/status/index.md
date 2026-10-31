---
slug: "tui/tui/widgets/status/index"
package: "tui"
title: "tui::widgets::status"
description: "The tui::widgets::status module."
module: "tui::widgets::status"
kind: "module"
name: "tui::widgets::status"
origin: "package"
auto: false
order: 13
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::status::{Gauge, Spinner};
```

## Types

| Name | Description |
|------|-------------|
| [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge) | A horizontal bar showing `value` out of `max`, with a label after it ("" for the percentage). |
| [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner) | An animated spinner and a label. |
| [`KeyHints`](/packages/tui/reference/tui/widgets/status/KeyHints) | A line of key hints: `^S save  q quit`. |

## Functions

| Name | Description |
|------|-------------|
| [`gauge`](/packages/tui/reference/tui/widgets/status/fn.gauge) | A [`Gauge`](/packages/tui/reference/tui/widgets/status/Gauge) at `value` of `max`; keep it to [`set`](/packages/stdlib/reference/collections/set) progress and `mount` it to show it. |
| [`spinner`](/packages/tui/reference/tui/widgets/status/fn.spinner) | A [`Spinner`](/packages/tui/reference/tui/widgets/status/Spinner) with `label`; keep it to `stop` it and `mount` it to show it. |
| [`key_hints`](/packages/tui/reference/tui/widgets/status/key_hints) | An empty hint line; add hints with `add`, then `mount` it. |
