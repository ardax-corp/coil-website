---
slug: "cli/cli/progress/Bar/elapsed_ms"
package: "cli"
title: "Bar::elapsed_ms"
description: "Method Bar::elapsed_ms."
module: "cli::progress"
kind: "method"
name: "elapsed_ms"
parent: "Bar"
signature: "pub fn elapsed_ms() -> int"
import: "use cli::progress::{Bar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L263"
order: 3
---

*No documentation yet.*

Called on a `Bar` value as `value.elapsed_ms(…)`.

## Returns

`int`

## See also

- [`Bar`](/packages/cli/reference/cli/progress/Bar): A redrawing progress bar.
- [`Bar::set_label`](/packages/cli/reference/cli/progress/Bar/set_label)
- [`Bar::inc`](/packages/cli/reference/cli/progress/Bar/inc)
- [`Bar::set`](/packages/cli/reference/cli/progress/Bar/set)
- [`Bar::line`](/packages/cli/reference/cli/progress/Bar/line)
- [`Bar::draw`](/packages/cli/reference/cli/progress/Bar/draw): Redraw now if enough time passed (or `force`).
- [`Bar::finish`](/packages/cli/reference/cli/progress/Bar/finish): Final draw and newline; `message` replaces the bar when not "".
- [`Bar::clear`](/packages/cli/reference/cli/progress/Bar/clear): Remove the bar's line.
