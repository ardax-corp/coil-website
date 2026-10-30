---
slug: "cli/cli/screen/Screen/frame"
package: "cli"
title: "Screen::frame"
description: "The buffer to draw the next frame into (cleared)."
module: "cli::screen"
kind: "method"
name: "frame"
parent: "Screen"
signature: "pub fn frame() -> Buffer"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L271"
order: 0
---

The buffer to draw the next frame into (cleared).

Called on a `Screen` value as `value.frame(…)`.

## Returns

`Buffer`

## See also

- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present): Escapes for the drawn frame (the full screen the first time and after `resize`/`invalidate`, else only the changes).
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate): Redraw everything on the next `present` (after the terminal was cleared by someone else).
- [`Screen::resize`](/packages/cli/reference/cli/screen/Screen/resize)
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols)
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows)
