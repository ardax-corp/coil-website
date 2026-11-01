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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.coil#L207"
order: 1
---

Foreground, background and attributes. Builder methods return a new `Style`, so a shared style is never changed under its users.

Start from [`plain`](/packages/cli/reference/cli/style/plain), [`fg`](/packages/cli/reference/cli/style/Style/fg) or [`bg`](/packages/cli/reference/cli/style/Style/bg) and chain the builders; turn a style
into text with [`Painter.paint`](/packages/cli/reference/cli/style/Painter/paint) or [`sgr`](/packages/cli/reference/cli/style/sgr).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fg` | `Color` | Foreground colour ([`Color::Default`](/packages/cli/reference/cli/style/Color#variant-default) leaves it alone). |
| `bg` | `Color` | Background colour ([`Color::Default`](/packages/cli/reference/cli/style/Color#variant-default) leaves it alone). |
| `attrs` | `int` | Attribute bits: [`BOLD`](/packages/cli/reference/cli/style/BOLD), [`DIM`](/packages/cli/reference/cli/style/DIM), [`ITALIC`](/packages/cli/reference/cli/style/ITALIC), [`UNDERLINE`](/packages/cli/reference/cli/style/UNDERLINE), [`BLINK`](/packages/cli/reference/cli/style/BLINK), [`REVERSE`](/packages/cli/reference/cli/style/REVERSE), [`HIDDEN`](/packages/cli/reference/cli/style/HIDDEN), [`STRIKE`](/packages/cli/reference/cli/style/STRIKE), or-ed together. |

## Methods

| Name | Description |
|------|-------------|
| [`with_attr`](/packages/cli/reference/cli/style/Style/with_attr) | This style with the attribute bit(s) `bit` added. |
| [`fg`](/packages/cli/reference/cli/style/Style/fg) | This style with foreground `c`. |
| [`bg`](/packages/cli/reference/cli/style/Style/bg) | This style with background `c`. |
| [`bold`](/packages/cli/reference/cli/style/Style/bold) | This style, bold. |
| [`dim`](/packages/cli/reference/cli/style/Style/dim) | This style, dim. |
| [`italic`](/packages/cli/reference/cli/style/Style/italic) | This style, italic. |
| [`underline`](/packages/cli/reference/cli/style/Style/underline) | This style, underlined. |
| [`blink`](/packages/cli/reference/cli/style/Style/blink) | This style, blinking. |
| [`reverse`](/packages/cli/reference/cli/style/Style/reverse) | This style in reverse video. |
| [`hidden`](/packages/cli/reference/cli/style/Style/hidden) | This style, hidden. |
| [`strike`](/packages/cli/reference/cli/style/Style/strike) | This style, struck through. |
| [`has`](/packages/cli/reference/cli/style/Style/has) | Whether any of the attribute bits in `bit` is set. |
| [`is_plain`](/packages/cli/reference/cli/style/Style/is_plain) | Whether nothing is set: default colours and no attributes. |
| [`merge`](/packages/cli/reference/cli/style/Style/merge) | `self` with `other`'s colours where `other` sets them, and both sets of attributes. |
| [`eq`](/packages/cli/reference/cli/style/Style/eq) | Whether both styles have the same colours and attributes. |

## Examples

```coil
use cli::style::{fg, red, blue, sgr, BOLD};
use cli::color::ColorLevel;
use tests::assert;
let s = fg(red()).bg(blue()).bold();
assert!(s.has(BOLD));
assert!(sgr(s, ColorLevel::Basic) == "\e[1;31;44m");
```

## See also

- [`cli::style::plain`](/packages/cli/reference/cli/style/plain)
- [`Style::fg`](/packages/cli/reference/cli/style/Style/fg)
- [`Style::bg`](/packages/cli/reference/cli/style/Style/bg)
- [`Painter::paint`](/packages/cli/reference/cli/style/Painter/paint)
- [`cli::style::sgr`](/packages/cli/reference/cli/style/sgr)
- [`cli::style::Color`](/packages/cli/reference/cli/style/Color)
- [`cli::style::BOLD`](/packages/cli/reference/cli/style/BOLD)
- [`cli::style::DIM`](/packages/cli/reference/cli/style/DIM)
- [`cli::style::ITALIC`](/packages/cli/reference/cli/style/ITALIC)
- [`cli::style::UNDERLINE`](/packages/cli/reference/cli/style/UNDERLINE)
- [`cli::style::BLINK`](/packages/cli/reference/cli/style/BLINK)
- [`cli::style::REVERSE`](/packages/cli/reference/cli/style/REVERSE)
- [`cli::style::HIDDEN`](/packages/cli/reference/cli/style/HIDDEN)
- [`cli::style::STRIKE`](/packages/cli/reference/cli/style/STRIKE)
