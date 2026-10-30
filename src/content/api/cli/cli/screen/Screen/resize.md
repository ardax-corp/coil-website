---
slug: "cli/cli/screen/Screen/resize"
package: "cli"
title: "Screen::resize"
description: "Method Screen::resize."
module: "cli::screen"
kind: "method"
name: "resize"
parent: "Screen"
signature: "pub fn resize(int cols, int rows)"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L298"
order: 3
---

*No documentation yet.*

Called on a `Screen` value as `value.resize(…)`.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |
| `rows` | `int` |

## See also

- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present): Escapes for the drawn frame (the full screen the first time and after `resize`/`invalidate`, else only the changes).
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate): Redraw everything on the next `present` (after the terminal was cleared by someone else).
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols)
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows)
