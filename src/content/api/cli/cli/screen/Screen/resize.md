---
slug: "cli/cli/screen/Screen/resize"
package: "cli"
title: "Screen::resize"
description: "New size: both buffers are replaced and the next present redraws everything."
module: "cli::screen"
kind: "method"
name: "resize"
parent: "Screen"
signature: "pub fn resize(int cols, int rows)"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/screen.hy#L372"
order: 3
---

New size: both buffers are replaced and the next [`present`](/packages/cli/reference/cli/screen/Screen/present) redraws everything.

Called on a `Screen` value as `value.resize(…)`.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |
| `rows` | `int` |

## See also

- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present)
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame): The buffer to draw the next frame into (cleared).
- [`Screen::invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate): Redraw everything on the next `present` (after the terminal was cleared by someone else).
- [`Screen::cols`](/packages/cli/reference/cli/screen/Screen/cols): Current width in cells.
- [`Screen::rows`](/packages/cli/reference/cli/screen/Screen/rows): Current height in cells.
