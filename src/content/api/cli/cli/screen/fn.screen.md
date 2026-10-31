---
slug: "cli/cli/screen/fn.screen"
package: "cli"
title: "screen"
description: "A cols by rows screen rendering at level; the first present redraws everything."
module: "cli::screen"
kind: "fn"
name: "screen"
signature: "fn screen(int cols, int rows, ColorLevel level) -> Screen"
import: "use cli::screen::{screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.hy#L337"
order: 12
---

A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |
| `rows` | `int` |
| `level` | `ColorLevel` |

## Returns

`Screen`

## See also

- [`light_box`](/packages/cli/reference/cli/screen/light_box): Thin lines with square corners: `┌─┐`.
- [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box): Thin lines with rounded corners: `╭─╮`.
- [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box): Thick lines: `┏━┓`.
- [`double_box`](/packages/cli/reference/cli/screen/double_box): Double lines: `╔═╗`.
- [`ascii_box`](/packages/cli/reference/cli/screen/ascii_box): Plain ASCII for terminals without box drawing: `+-+`.
- [`buffer`](/packages/cli/reference/cli/screen/fn.buffer): A `cols` by `rows` buffer of blank cells.
- [`render_diff`](/packages/cli/reference/cli/screen/render_diff): Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes.
- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
