---
slug: "cli/cli/progress/Bar/set"
package: "cli"
title: "Bar::set"
description: "Set the steps done to n and redraw (throttled)."
module: "cli::progress"
kind: "method"
name: "set"
parent: "Bar"
signature: "pub fn set(int n)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/progress.hy#L321"
order: 2
---

Set the steps done to `n` and redraw (throttled).

Called on a `Bar` value as `value.set(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label): Change the label and redraw (throttled).
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc): Advance by `n` steps and redraw (throttled).
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms): Milliseconds since the bar was made.
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line): The line as it would be drawn now (see `render_line`).
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
