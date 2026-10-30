---
slug: "cli/cli/screen/Screen/cols"
package: "cli"
title: "Screen::cols"
description: "Method Screen::cols."
module: "cli::screen"
kind: "method"
name: "cols"
parent: "Screen"
signature: "pub fn cols() -> int"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L304"
order: 4
---

*No documentation yet.*

Called on a `Screen` value as `value.cols(…)`.

## Returns

`int`

## See also

- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present): Escapes for the drawn frame (the full screen the first time and after `resize`/`invalidate`, else only the changes).
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate): Redraw everything on the next `present` (after the terminal was cleared by someone else).
- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize)
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows)
