---
slug: "cli/cli/progress/Bar/elapsed_ms"
package: "cli"
title: "Bar::elapsed_ms"
description: "Milliseconds since the bar was made."
module: "cli::progress"
kind: "method"
name: "elapsed_ms"
parent: "Bar"
signature: "pub fn elapsed_ms() -> int"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L327"
order: 3
---

Milliseconds since the bar was made.

Called on a `Bar` value as `value.elapsed_ms(…)`.

## Returns

`int`

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label): Change the label and redraw (throttled).
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc): Advance by `n` steps and redraw (throttled).
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set): Set the steps done to `n` and redraw (throttled).
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line): The line as it would be drawn now (see `render_line`).
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
