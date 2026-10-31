---
slug: "tui/tui/widgets/text/index"
package: "tui"
title: "tui::widgets::text"
description: "The tui::widgets::text module."
module: "tui::widgets::text"
kind: "module"
name: "tui::widgets::text"
origin: "package"
auto: false
order: 15
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::text::{Text, Rule};
```

## Types

| Name | Description |
|------|-------------|
| [`Text`](/packages/tui/reference/tui/widgets/text/Text) | Text: fixed (`content`) or computed on every draw (`source`), word wrapped by default, sized to its content. |
| [`Rule`](/packages/tui/reference/tui/widgets/text/Rule) | A horizontal line, with an optional label at its start. |

## Functions

| Name | Description |
|------|-------------|
| [`text`](/packages/tui/reference/tui/widgets/text/fn.text) | A text node showing `s`, word wrapped and sized to its content. |
| [`styled`](/packages/tui/reference/tui/widgets/text/styled) | A text node showing `s` in style `st`. |
| [`text_fn`](/packages/tui/reference/tui/widgets/text/text_fn) | Text recomputed on every draw: `text_fn(fn () use (m) => m.status)`. |
| [`rule`](/packages/tui/reference/tui/widgets/text/fn.rule) | A one-row horizontal rule with `label` at its start ("" for a plain line). |
