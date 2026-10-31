---
slug: "cli/cli/style/Style/with_attr"
package: "cli"
title: "Style::with_attr"
description: "This style with the attribute bit(s) bit added."
module: "cli::style"
kind: "method"
name: "with_attr"
parent: "Style"
signature: "pub fn with_attr(int bit) -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.hy#L234"
order: 0
---

This style with the attribute bit(s) `bit` added.

Called on a `Style` value as `value.with_attr(…)`.

## Parameters

| Name | Type |
|------|------|
| `bit` | `int` |

## Returns

`Style`

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
- [`Style::fg`](/packages/cli/reference/cli/style/Style/fg): This style with foreground `c`.
- [`Style::bg`](/packages/cli/reference/cli/style/Style/bg): This style with background `c`.
- [`Style::bold`](/packages/cli/reference/cli/style/Style/bold): This style, bold.
- [`Style::dim`](/packages/cli/reference/cli/style/Style/dim): This style, dim.
- [`Style::italic`](/packages/cli/reference/cli/style/Style/italic): This style, italic.
- [`Style::underline`](/packages/cli/reference/cli/style/Style/underline): This style, underlined.
- [`Style::blink`](/packages/cli/reference/cli/style/Style/blink): This style, blinking.
