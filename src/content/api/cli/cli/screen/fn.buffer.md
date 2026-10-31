---
slug: "cli/cli/screen/fn.buffer"
package: "cli"
title: "buffer"
description: "A cols by rows buffer of blank cells."
module: "cli::screen"
kind: "fn"
name: "buffer"
signature: "fn buffer(int cols, int rows) -> Buffer"
import: "use cli::screen::{buffer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L106"
order: 9
---

A `cols` by `rows` buffer of blank cells.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |
| `rows` | `int` |

## Returns

`Buffer`

## See also

- [`light_box`](/packages/cli/reference/cli/screen/light_box): Thin lines with square corners: `┌─┐`.
- [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box): Thin lines with rounded corners: `╭─╮`.
- [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box): Thick lines: `┏━┓`.
- [`double_box`](/packages/cli/reference/cli/screen/double_box): Double lines: `╔═╗`.
- [`ascii_box`](/packages/cli/reference/cli/screen/ascii_box): Plain ASCII for terminals without box drawing: `+-+`.
- [`render_diff`](/packages/cli/reference/cli/screen/render_diff): Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes.
- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
- [`screen`](/packages/cli/reference/cli/screen/fn.screen): A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything.
