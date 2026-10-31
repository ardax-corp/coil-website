---
slug: "tui/tui/run/run"
package: "tui"
title: "run"
description: "Run root full screen until something quits (ctx.quit(), Ctrl-C by default) or input ends. The terminal is restored on the way out, also after an error or a panic. The colour level comes from the environment, so the program needs --allow-env; run_app takes an App with the level already chosen."
module: "tui::run"
kind: "fn"
name: "run"
signature: "fn run(Node root) -> Result<(), TtyError>"
import: "use tui::run::{run};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/run.hy#L42"
order: 0
---

Run `root` full screen until something quits (`ctx.quit()`, Ctrl-C by default) or input ends. The terminal is restored on the way out, also after an error or a panic. The colour level comes from the environment, so the program needs `--allow-env`; [`run_app`](/packages/tui/reference/tui/run/run_app) takes an `App` with the level already chosen.

## Parameters

| Name | Type |
|------|------|
| `root` | `Node` |

## Returns

`Result<(), TtyError>`

## See also

- [`tui::run::run_app`](/packages/tui/reference/tui/run/run_app)
