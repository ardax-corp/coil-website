---
slug: "cli/cli/screen/double_box"
package: "cli"
title: "double_box"
description: "Double lines: ╔═╗."
module: "cli::screen"
kind: "fn"
name: "double_box"
signature: "fn double_box() -> BoxChars"
import: "use cli::screen::{double_box};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.coil#L63"
order: 7
---

Double lines: `╔═╗`.

## Returns

`BoxChars`

## See also

- [`light_box`](/packages/cli/reference/cli/screen/light_box): Thin lines with square corners: `┌─┐`.
- [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box): Thin lines with rounded corners: `╭─╮`.
- [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box): Thick lines: `┏━┓`.
- [`ascii_box`](/packages/cli/reference/cli/screen/ascii_box): Plain ASCII for terminals without box drawing: `+-+`.
- [`buffer`](/packages/cli/reference/cli/screen/fn.buffer): A `cols` by `rows` buffer of blank cells.
- [`render_diff`](/packages/cli/reference/cli/screen/render_diff): Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes.
- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
- [`screen`](/packages/cli/reference/cli/screen/fn.screen): A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything.
