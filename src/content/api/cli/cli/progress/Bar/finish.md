---
slug: "cli/cli/progress/Bar/finish"
package: "cli"
title: "Bar::finish"
description: "Final draw and newline; message replaces the bar when not \"\"."
module: "cli::progress"
kind: "method"
name: "finish"
parent: "Bar"
signature: "pub fn finish(string message)"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L293"
order: 6
---

Final draw and newline; `message` replaces the bar when not "".

Called on a `Bar` value as `value.finish(…)`.

## Parameters

| Name | Type |
|------|------|
| `message` | `string` |

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label)
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::elapsed_ms`](/packages/cli/reference/cli/progress/Bar/elapsed_ms)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
