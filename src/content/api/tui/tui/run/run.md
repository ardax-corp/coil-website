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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/run.hy#L42"
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
