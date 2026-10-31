---
slug: "cli/cli/progress/Bar/line"
package: "cli"
title: "Bar::line"
description: "The line as it would be drawn now (see render_line)."
module: "cli::progress"
kind: "method"
name: "line"
parent: "Bar"
signature: "pub fn line() -> string"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/progress.hy#L332"
order: 4
---

The line as it would be drawn now (see [`render_line`](/packages/cli/reference/cli/progress/render_line)).

Called on a `Bar` value as `value.line(…)`.

## Returns

`string`

## See also

- [`cli::progress::render_line`](/packages/cli/reference/cli/progress/render_line)
- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label): Change the label and redraw (throttled).
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc): Advance by `n` steps and redraw (throttled).
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set): Set the steps done to `n` and redraw (throttled).
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms): Milliseconds since the bar was made.
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
