---
slug: "cli/cli/screen/Screen/cols"
package: "cli"
title: "Screen::cols"
description: "Current width in cells."
module: "cli::screen"
kind: "method"
name: "cols"
parent: "Screen"
signature: "pub fn cols() -> int"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.coil#L379"
order: 4
---

Current width in cells.

Called on a `Screen` value as `value.cols(…)`.

## Returns

`int`

## See also

- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present): Escapes for the drawn frame (the full screen the first time and after `resize`/`invalidate`, else only the changes).
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate): Redraw everything on the next `present` (after the terminal was cleared by someone else).
- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize): New size: both buffers are replaced and the next `present` redraws everything.
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows): Current height in cells.
