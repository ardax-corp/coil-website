---
slug: "cli/cli/screen/ascii_box"
package: "cli"
title: "ascii_box"
description: "Plain ASCII for terminals without box drawing: +-+."
module: "cli::screen"
kind: "fn"
name: "ascii_box"
signature: "fn ascii_box() -> BoxChars"
import: "use cli::screen::{ascii_box};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/screen.hy#L68"
order: 8
---

Plain ASCII for terminals without box drawing: `+-+`.

## Returns

`BoxChars`

## See also

- [`light_box`](/packages/cli/reference/cli/screen/light_box): Thin lines with square corners: `┌─┐`.
- [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box): Thin lines with rounded corners: `╭─╮`.
- [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box): Thick lines: `┏━┓`.
- [`double_box`](/packages/cli/reference/cli/screen/double_box): Double lines: `╔═╗`.
- [`buffer`](/packages/cli/reference/cli/screen/fn.buffer): A `cols` by `rows` buffer of blank cells.
- [`render_diff`](/packages/cli/reference/cli/screen/render_diff): Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes.
- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
- [`screen`](/packages/cli/reference/cli/screen/fn.screen): A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything.
