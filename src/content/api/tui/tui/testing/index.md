---
slug: "tui/tui/testing/index"
package: "tui"
title: "tui::testing"
description: "The tui::testing module."
module: "tui::testing"
kind: "module"
name: "tui::testing"
origin: "package"
auto: false
order: 6
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::testing::{Harness, parse_key};
```

## Types

| Name | Description |
|------|-------------|
| [`Harness`](/packages/tui/reference/tui/testing/Harness) | A headless app of a fixed size, drawn after every input: the way to test a UI. |

## Functions

| Name | Description |
|------|-------------|
| [`parse_key`](/packages/tui/reference/tui/testing/parse_key) | The key event for a spec as [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it: `"ctrl+c"`, `"shift+tab"`, `"f5"`, `"space"`, `"a"`. |
| [`harness`](/packages/tui/reference/tui/testing/fn.harness) | A harness running `root` in a `cols` by `rows` screen with colour off, drawn once already. |
