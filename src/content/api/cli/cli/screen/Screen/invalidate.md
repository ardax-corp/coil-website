---
slug: "cli/cli/screen/Screen/invalidate"
package: "cli"
title: "Screen::invalidate"
description: "Redraw everything on the next present (after the terminal was cleared by someone else)."
module: "cli::screen"
kind: "method"
name: "invalidate"
parent: "Screen"
signature: "pub fn invalidate()"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L366"
order: 2
---

Redraw everything on the next [`present`](/packages/cli/reference/cli/screen/Screen/present) (after the terminal was cleared by someone else).

Called on a `Screen` value as `value.invalidate(…)`.

## See also

- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize): New size: both buffers are replaced and the next `present` redraws everything.
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols): Current width in cells.
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows): Current height in cells.
