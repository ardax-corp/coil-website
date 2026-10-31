---
slug: "tui/tui/widgets/text/Text/lines"
package: "tui"
title: "Text::lines"
description: "The lines drawn in cols columns."
module: "tui::widgets::text"
kind: "method"
name: "lines"
parent: "Text"
signature: "pub fn lines(int cols) -> Vec<string>"
import: "use tui::widgets::text::{Text};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/text.hy#L53"
order: 2
---

The lines drawn in `cols` columns.

Called on a `Text` value as `value.lines(…)`.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |

## Returns

`Vec<string>`

## See also

- [`Text`](/packages/tui/reference/tui/widgets/text/Text): Text: fixed (`content`) or computed on every draw (`source`), word wrapped by default, sized to its content.
- [`Text::new`](/packages/tui/reference/tui/widgets/text/Text/new): Fixed, wrapped, left-aligned `content` in the theme's text style.
- [`Text::current`](/packages/tui/reference/tui/widgets/text/Text/current): The text as it would be drawn now.
- [`Text::styled`](/packages/tui/reference/tui/widgets/text/Text/styled): Draw in `s` instead of the theme's text style (builder style).
- [`Text::aligned`](/packages/tui/reference/tui/widgets/text/Text/aligned): Align each line by `a` (builder style).
- [`Text::nowrap`](/packages/tui/reference/tui/widgets/text/Text/nowrap): Do not wrap: each line is cut with "…" (builder style).
