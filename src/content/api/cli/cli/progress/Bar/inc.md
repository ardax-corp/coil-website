---
slug: "cli/cli/progress/Bar/inc"
package: "cli"
title: "Bar::inc"
description: "Method Bar::inc."
module: "cli::progress"
kind: "method"
name: "inc"
parent: "Bar"
signature: "pub fn inc(int n)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L253"
order: 1
---

*No documentation yet.*

Called on a `Bar` value as `value.inc(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
