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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L306"
order: 7
---

Remove the bar's line.

Called on a `Bar` value as `value.clear(…)`.

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label)
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
