---
slug: "cli/cli/style/Style/underline"
package: "cli"
title: "Style::underline"
description: "This style, underlined."
module: "cli::style"
kind: "method"
name: "underline"
parent: "Style"
signature: "pub fn underline() -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/style.hy#L264"
order: 6
---

This style, underlined.

Called on a `Style` value as `value.underline(…)`.

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
- [`Style::blink`](/packages/cli/reference/cli/style/Style/blink): This style, blinking.
