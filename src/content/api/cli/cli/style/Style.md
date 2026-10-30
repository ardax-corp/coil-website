---
slug: "cli/cli/style/Style"
package: "cli"
title: "Style"
description: "Foreground, background and attributes. Builder methods return a new Style, so a shared style is never changed under its users."
module: "cli::style"
kind: "class"
name: "Style"
signature: "class Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L154"
order: 0
---

Foreground, background and attributes. Builder methods return a new `Style`, so a shared style is never changed under its users.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fg` | `Color` |  |
| `bg` | `Color` |  |
| `attrs` | `int` |  |

## Methods

| Name | Description |
|------|-------------|
| [`with_attr`](/packages/cli/reference/cli/style/Style/with_attr) |  |
| [`fg`](/packages/cli/reference/cli/style/Style/fg) |  |
| [`bg`](/packages/cli/reference/cli/style/Style/bg) |  |
| [`bold`](/packages/cli/reference/cli/style/Style/bold) |  |
| [`dim`](/packages/cli/reference/cli/style/Style/dim) |  |
| [`italic`](/packages/cli/reference/cli/style/Style/italic) |  |
| [`underline`](/packages/cli/reference/cli/style/Style/underline) |  |
| [`blink`](/packages/cli/reference/cli/style/Style/blink) |  |
| [`reverse`](/packages/cli/reference/cli/style/Style/reverse) |  |
| [`hidden`](/packages/cli/reference/cli/style/Style/hidden) |  |
| [`strike`](/packages/cli/reference/cli/style/Style/strike) |  |
| [`has`](/packages/cli/reference/cli/style/Style/has) |  |
| [`is_plain`](/packages/cli/reference/cli/style/Style/is_plain) |  |
| [`merge`](/packages/cli/reference/cli/style/Style/merge) | `self` with `other`'s colours where `other` sets them, and both sets of attributes. |
| [`eq`](/packages/cli/reference/cli/style/Style/eq) |  |

## See also

- [`Painter`](/packages/cli/reference/cli/style/Painter): Paints at a fixed colour level.
