---
slug: "cli/cli/style/Style/fg"
package: "cli"
title: "Style::fg"
description: "This style with foreground c."
module: "cli::style"
kind: "method"
name: "fg"
parent: "Style"
signature: "pub fn fg(Color c) -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L239"
order: 1
---

This style with foreground `c`.

Called on a `Style` value as `value.fg(…)`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Color` |

## Returns

`Style`

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
- [`Style::with_attr`](/packages/cli/reference/cli/style/Style/with_attr): This style with the attribute bit(s) `bit` added.
- [`Style::bg`](/packages/cli/reference/cli/style/Style/bg): This style with background `c`.
- [`Style::bold`](/packages/cli/reference/cli/style/Style/bold): This style, bold.
- [`Style::dim`](/packages/cli/reference/cli/style/Style/dim): This style, dim.
- [`Style::italic`](/packages/cli/reference/cli/style/Style/italic): This style, italic.
- [`Style::underline`](/packages/cli/reference/cli/style/Style/underline): This style, underlined.
- [`Style::blink`](/packages/cli/reference/cli/style/Style/blink): This style, blinking.
