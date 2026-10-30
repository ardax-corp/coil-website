---
slug: "cli/cli/screen/Screen"
package: "cli"
title: "Screen"
description: "Double-buffered presenter. Draw into frame(), then write what present() returns."
module: "cli::screen"
kind: "class"
name: "Screen"
signature: "class Screen"
import: "use cli::screen::{Screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L258"
order: 3
---

Double-buffered presenter. Draw into [`frame()`](/packages/cli/reference/cli/screen/Screen/frame), then write what [`present()`](/packages/cli/reference/cli/screen/Screen/present) returns.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `ColorLevel` |  |

## Methods

| Name | Description |
|------|-------------|
| [`frame`](/packages/cli/reference/cli/screen/Screen/frame) | The buffer to draw the next frame into (cleared). |
| [`present`](/packages/cli/reference/cli/screen/Screen/present) | Escapes for the drawn frame (the full screen the first time and after [`resize`](/packages/cli/reference/cli/screen/Screen/resize)/[`invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate), else only the changes). |
| [`invalidate`](/packages/cli/reference/cli/screen/Screen/invalidate) | Redraw everything on the next [`present`](/packages/cli/reference/cli/screen/Screen/present) (after the terminal was cleared by someone else). |
| [`resize`](/packages/cli/reference/cli/screen/Screen/resize) |  |
| [`cols`](/packages/cli/reference/cli/screen/Screen/cols) |  |
| [`rows`](/packages/cli/reference/cli/screen/Screen/rows) |  |

## See also

- [`Screen::frame`](/packages/cli/reference/cli/screen/Screen/frame)
- [`Screen::present`](/packages/cli/reference/cli/screen/Screen/present)
- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
- [`Buffer`](/packages/cli/reference/cli/screen/Buffer)
