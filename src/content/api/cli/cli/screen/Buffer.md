---
slug: "cli/cli/screen/Buffer"
package: "cli"
title: "Buffer"
description: "Class Buffer."
module: "cli::screen"
kind: "class"
name: "Buffer"
signature: "shared class Buffer"
import: "use cli::screen::{Buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/screen.hy#L65"
order: 2
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `cols` | `int` |  |
| `rows` | `int` |  |

## Methods

| Name | Description |
|------|-------------|
| [`in_bounds`](/packages/cli/reference/cli/screen/Buffer/in_bounds) |  |
| [`get`](/packages/cli/reference/cli/screen/Buffer/get) | Cell at 0-based column `x`, row `y` (a blank outside the grid). |
| [`set`](/packages/cli/reference/cli/screen/Buffer/set) | Set one cell. |
| [`clear`](/packages/cli/reference/cli/screen/Buffer/clear) | Reset every cell to a blank. |
| [`put`](/packages/cli/reference/cli/screen/Buffer/put) | Write `s` from (`x`, `y`) on one row, clipped at the right edge. |
| [`fill`](/packages/cli/reference/cli/screen/Buffer/fill) | Fill a rectangle with `ch` (one column wide). |
| [`hline`](/packages/cli/reference/cli/screen/Buffer/hline) |  |
| [`vline`](/packages/cli/reference/cli/screen/Buffer/vline) |  |
| [`draw_box`](/packages/cli/reference/cli/screen/Buffer/draw_box) | A box outline; `w`, `h` include the border. |
| [`row_text`](/packages/cli/reference/cli/screen/Buffer/row_text) | Row `y` as plain text (styles dropped), for tests and snapshots. |
| [`text`](/packages/cli/reference/cli/screen/Buffer/text) | Every row's text joined with "\n". |

## See also

- [`Cell`](/packages/cli/reference/cli/screen/Cell): One cell: the text drawn there (one character plus any zero-width marks) and its style.
- [`BoxChars`](/packages/cli/reference/cli/screen/BoxChars): Box-drawing characters for `Buffer.draw_box`.
- [`Screen`](/packages/cli/reference/cli/screen/Screen): Double-buffered presenter.
