---
slug: "cli/cli/style/Style/bg"
package: "cli"
title: "Style::bg"
description: "This style with background c."
module: "cli::style"
kind: "method"
name: "bg"
parent: "Style"
signature: "pub fn bg(Color c) -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/style.coil#L244"
order: 2
---

This style with background `c`.

Called on a `Style` value as `value.bg(…)`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Color` |

## Returns

`Style`

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
- [`Style::with_attr`](/packages/cli/reference/cli/style/Style/with_attr): This style with the attribute bit(s) `bit` added.
- [`Style::fg`](/packages/cli/reference/cli/style/Style/fg): This style with foreground `c`.
- [`Style::bold`](/packages/cli/reference/cli/style/Style/bold): This style, bold.
- [`Style::dim`](/packages/cli/reference/cli/style/Style/dim): This style, dim.
- [`Style::italic`](/packages/cli/reference/cli/style/Style/italic): This style, italic.
- [`Style::underline`](/packages/cli/reference/cli/style/Style/underline): This style, underlined.
- [`Style::blink`](/packages/cli/reference/cli/style/Style/blink): This style, blinking.
