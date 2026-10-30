---
slug: "cli/cli/progress/Bar/set_label"
package: "cli"
title: "Bar::set_label"
description: "Method Bar::set_label."
module: "cli::progress"
kind: "method"
name: "set_label"
parent: "Bar"
signature: "pub fn set_label(string label)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L248"
order: 0
---

*No documentation yet.*

Called on a `Bar` value as `value.set_label(…)`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
