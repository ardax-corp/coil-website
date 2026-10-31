---
slug: "cli/cli/progress/Bar/set_label"
package: "cli"
title: "Bar::set_label"
description: "Change the label and redraw (throttled)."
module: "cli::progress"
kind: "method"
name: "set_label"
parent: "Bar"
signature: "pub fn set_label(string label)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.hy#L309"
order: 0
---

Change the label and redraw (throttled).

Called on a `Bar` value as `value.set_label(…)`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A progress bar on stderr that redraws its line in place, at most every 80ms.
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc): Advance by `n` steps and redraw (throttled).
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set): Set the steps done to `n` and redraw (throttled).
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms): Milliseconds since the bar was made.
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line): The line as it would be drawn now (see `render_line`).
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
