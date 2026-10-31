---
slug: "cli/cli/progress/Bar/clear"
package: "cli"
title: "Bar::clear"
description: "Remove the bar's line."
module: "cli::progress"
kind: "method"
name: "clear"
parent: "Bar"
signature: "pub fn clear()"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L371"
order: 7
---

Remove the bar's line.

Called on a `Bar` value as `value.clear(…)`.

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label): Change the label and redraw (throttled).
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc): Advance by `n` steps and redraw (throttled).
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set): Set the steps done to `n` and redraw (throttled).
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms): Milliseconds since the bar was made.
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line): The line as it would be drawn now (see `render_line`).
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
