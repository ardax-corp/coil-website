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
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/screen.coil#L372"
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
