---
slug: "cli/cli/style/Style/blink"
package: "cli"
title: "Style::blink"
description: "This style, blinking."
module: "cli::style"
kind: "method"
name: "blink"
parent: "Style"
signature: "pub fn blink() -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/style.hy#L269"
order: 7
---

This style, blinking.

Called on a `Style` value as `value.blink(…)`.

## Returns

`Style`

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
- [`Style::with_attr`](/packages/cli/reference/cli/style/Style/with_attr): This style with the attribute bit(s) `bit` added.
- [`Style::fg`](/packages/cli/reference/cli/style/Style/fg): This style with foreground `c`.
- [`Style::bg`](/packages/cli/reference/cli/style/Style/bg): This style with background `c`.
- [`Style::bold`](/packages/cli/reference/cli/style/Style/bold): This style, bold.
- [`Style::dim`](/packages/cli/reference/cli/style/Style/dim): This style, dim.
- [`Style::italic`](/packages/cli/reference/cli/style/Style/italic): This style, italic.
- [`Style::underline`](/packages/cli/reference/cli/style/Style/underline): This style, underlined.
