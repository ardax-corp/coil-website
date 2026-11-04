---
slug: "tui/tui/run/run_app"
package: "tui"
title: "run_app"
description: "run for an App you set up yourself (theme, key bindings, timers). Err when stdin is not a terminal or writing to it fails."
module: "tui::run"
kind: "fn"
name: "run_app"
signature: "fn run_app(App a) -> Result<(), TtyError>"
import: "use tui::run::{run_app};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/run.coil#L63"
order: 1
---

[`run`](/packages/tui/reference/tui/run/run) for an `App` you set up yourself (theme, key bindings, timers). `Err` when stdin is not a terminal or writing to it fails.

## Parameters

| Name | Type |
|------|------|
| `a` | `App` |

## Returns

`Result<(), TtyError>`

## Examples

```coil
use cli::color::ColorLevel;
use io::tty::TtyError;
use tui::app::app;
use tui::run::run_app;
use tui::widgets::text::text;
fn main() -> Result<(), TtyError> {
    let a = app(text("Hello! Ctrl-C quits."), ColorLevel::Basic);
    a.bind("q", fn (tui::node::Ctx c) => c.quit());
    return run_app(a)?;
}
```

## See also

- [`tui::run::run`](/packages/tui/reference/tui/run/run)
