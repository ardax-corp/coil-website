---
slug: "cli/cli/screen/Screen"
package: "cli"
title: "Screen"
description: "Double-buffered presenter. Draw into frame(), then write what present() returns: the first frame in full, later frames as the difference from the one before."
module: "cli::screen"
kind: "class"
name: "Screen"
signature: "class Screen"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L327"
order: 3
---

Double-buffered presenter. Draw into [`frame()`](/packages/cli/reference/cli/screen/Screen/frame), then write what [`present()`](/packages/cli/reference/cli/screen/Screen/present) returns: the first frame in full, later frames as the difference from the one before.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ColorLevel` | The colour level frames are rendered at. |

## Methods

| Name | Description |
|------|-------------|
| [`frame`](/packages/cli/reference/cli/screen/Screen/frame) | The buffer to draw the next frame into (cleared). |
| [`present`](/packages/cli/reference/cli/screen/Screen/present) | Escapes for the drawn frame (the full screen the first time and after [`resize`](/packages/cli/reference/cli/screen/Screen/resize)/[`invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate), else only the changes). |
| [`invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate) | Redraw everything on the next [`present`](/packages/cli/reference/cli/screen/Screen/present) (after the terminal was cleared by someone else). |
| [`resize`](/packages/cli/reference/cli/screen/Screen/resize) | New size: both buffers are replaced and the next [`present`](/packages/cli/reference/cli/screen/Screen/present) redraws everything. |
| [`cols`](/packages/cli/reference/cli/screen/Screen/cols) | Current width in cells. |
| [`rows`](/packages/cli/reference/cli/screen/Screen/rows) | Current height in cells. |

## Examples

```coil
use cli::screen::screen;
use cli::style::plain;
use cli::color::ColorLevel;
use tests::assert;
let s = screen(20, 5, ColorLevel::Basic);
s.frame().put(0, 0, "hello", plain());
let first = s.present();
assert!(first.starts_with("\e[H\e[2J"));
s.frame().put(0, 0, "hello", plain());
assert!(s.present() == "");
```

## See also

- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame)
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present)
- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer): A grid of styled cells, `cols` by `rows`, addressed by 0-based column `x` and row `y`.
