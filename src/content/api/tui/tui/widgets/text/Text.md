---
slug: "tui/tui/widgets/text/Text"
package: "tui"
title: "Text"
description: "Text: fixed (content) or computed on every draw (source), word wrapped by default, sized to its content."
module: "tui::widgets::text"
kind: "class"
name: "Text"
signature: "shared class Text"
import: "use tui::widgets::text::{Text};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/text.coil#L20"
order: 0
---

Text: fixed (`content`) or computed on every draw (`source`), word wrapped by default, sized to its content.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `content` | `string` | The text when not `dynamic`; `\n` starts a new line. |
| `source` | `fn() -> string` | Called on every draw instead of using `content` when `dynamic`. |
| `dynamic` | `bool` | Whether `source` is called instead of using `content`. |
| `style` | `Option<Style>` | `None` uses the theme's text style. |
| `align` | `Align` | Horizontal alignment of each line (`Start` by default). |
| `wrapped` | `bool` | Wrap at word boundaries; otherwise each line is cut with "…". |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/text/Text/new) | Fixed, wrapped, left-aligned `content` in the theme's text style. |

## Methods

| Name | Description |
|------|-------------|
| [`current`](/packages/tui/reference/tui/widgets/text/Text/current) | The text as it would be drawn now. |
| [`lines`](/packages/tui/reference/tui/widgets/text/Text/lines) | The lines drawn in `cols` columns. |
| [`styled`](/packages/tui/reference/tui/widgets/text/Text/styled) | Draw in `s` instead of the theme's text style (builder style). |
| [`aligned`](/packages/tui/reference/tui/widgets/text/Text/aligned) | Align each line by `a` (builder style). |
| [`nowrap`](/packages/tui/reference/tui/widgets/text/Text/nowrap) | Do not wrap: each line is cut with "…" (builder style). |

## Trait implementations

- `Component` for `Text`

## See also

- [`Rule`](/packages/tui/reference/tui/widgets/text/Rule): A horizontal line, with an optional label at its start.
