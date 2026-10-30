---
slug: "cli/cli/progress/Bar/draw"
package: "cli"
title: "Bar::draw"
description: "Redraw now if enough time passed (or force)."
module: "cli::progress"
kind: "method"
name: "draw"
parent: "Bar"
signature: "pub fn draw(bool force)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L279"
order: 5
---

Redraw now if enough time passed (or `force`).

Called on a `Bar` value as `value.draw(…)`.

## Parameters

| Name | Type |
|------|------|
| `force` | `bool` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label)
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
