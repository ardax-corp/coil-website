---
slug: "tui/tui/widgets/text/Text/aligned"
package: "tui"
title: "Text::aligned"
description: "Align each line by a (builder style)."
module: "tui::widgets::text"
kind: "method"
name: "aligned"
parent: "Text"
signature: "pub fn aligned(Align a) -> Text"
import: "use tui::widgets::text::{Text};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/text.hy#L69"
order: 4
---

Align each line by `a` (builder style).

Called on a `Text` value as `value.aligned(…)`.

## Parameters

| Name | Type |
|------|------|
| `a` | `Align` |

## Returns

`Text`

## See also

- [`Text`](/packages/tui/reference/tui/widgets/text/Text): Text: fixed (`content`) or computed on every draw (`source`), word wrapped by default, sized to its content.
- [`Text::new`](/packages/tui/reference/tui/widgets/text/Text/new): Fixed, wrapped, left-aligned `content` in the theme's text style.
- [`Text::current`](/packages/tui/reference/tui/widgets/text/Text/current): The text as it would be drawn now.
- [`Text::lines`](/packages/tui/reference/tui/widgets/text/Text/lines): The lines drawn in `cols` columns.
- [`Text::styled`](/packages/tui/reference/tui/widgets/text/Text/styled): Draw in `s` instead of the theme's text style (builder style).
- [`Text::nowrap`](/packages/tui/reference/tui/widgets/text/Text/nowrap): Do not wrap: each line is cut with "…" (builder style).
