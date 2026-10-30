---
slug: "cli/cli/line/index"
package: "cli"
title: "cli::line"
description: "A line editor with history, kill and yank, and read_line to run it in raw mode."
module: "cli::line"
kind: "module"
name: "cli::line"
origin: "package"
auto: false
order: 5
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::line::{Outcome, History};
```

## Types

| Name | Description |
|------|-------------|
| [`Outcome`](/packages/cli/reference/cli/line/Outcome) | What the caller should do after an action. |
| [`History`](/packages/cli/reference/cli/line/History) |  |
| [`Editor`](/packages/cli/reference/cli/line/Editor) |  |
| [`LineInput`](/packages/cli/reference/cli/line/LineInput) | What [`read_line`](/packages/cli/reference/cli/line/read_line) got. |
| [`Edit`](/packages/cli/reference/cli/line/Edit) |  |

## Functions

| Name | Description |
|------|-------------|
| [`units`](/packages/cli/reference/cli/line/units) | `s` split into display units: one character plus any zero-width marks. |
| [`edit_for`](/packages/cli/reference/cli/line/edit_for) | The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor. |
| [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked) | Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "". |
| [`read_line`](/packages/cli/reference/cli/line/read_line) | [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked) with the text shown. |
