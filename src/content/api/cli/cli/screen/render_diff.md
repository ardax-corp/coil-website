---
slug: "cli/cli/screen/render_diff"
package: "cli"
title: "render_diff"
description: "Escapes that turn a terminal showing prev into next (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. Ends with attributes reset. Empty when nothing changed."
module: "cli::screen"
kind: "fn"
name: "render_diff"
signature: "fn render_diff(Buffer prev, Buffer next, ColorLevel level) -> string"
import: "use cli::screen::{render_diff};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/screen.coil#L266"
order: 10
---

Escapes that turn a terminal showing `prev` into `next` (same size): only changed cells are written, with cursor moves between runs and an SGR change only when the style changes. Ends with attributes reset. Empty when nothing changed.

## Parameters

| Name | Type |
|------|------|
| `prev` | `Buffer` |
| `next` | `Buffer` |
| `level` | `ColorLevel` |

## Returns

`string`

## Examples

```coil
use cli::screen::{buffer, render_diff};
use cli::style::plain;
use cli::color::ColorLevel;
use tests::assert;
let a = buffer(10, 2);
let b = buffer(10, 2);
b.put(3, 1, "x", plain());
assert!(render_diff(a, a, ColorLevel::None) == "");
assert!(render_diff(a, b, ColorLevel::None) == "\e[2;4H\e[0mx\e[0m");
```

## See also

- [`light_box`](/packages/cli/reference/cli/screen/light_box): Thin lines with square corners: `┌─┐`.
- [`rounded_box`](/packages/cli/reference/cli/screen/rounded_box): Thin lines with rounded corners: `╭─╮`.
- [`heavy_box`](/packages/cli/reference/cli/screen/heavy_box): Thick lines: `┏━┓`.
- [`double_box`](/packages/cli/reference/cli/screen/double_box): Double lines: `╔═╗`.
- [`ascii_box`](/packages/cli/reference/cli/screen/ascii_box): Plain ASCII for terminals without box drawing: `+-+`.
- [`buffer`](/packages/cli/reference/cli/screen/fn.buffer): A `cols` by `rows` buffer of blank cells.
- [`render_full`](/packages/cli/reference/cli/screen/render_full): The whole buffer: clear, then every row.
- [`screen`](/packages/cli/reference/cli/screen/fn.screen): A `cols` by `rows` screen rendering at `level`; the first `present` redraws everything.
