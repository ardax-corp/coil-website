---
slug: "cli/cli/style/Style/merge"
package: "cli"
title: "Style::merge"
description: "self with other's colours where other sets them, and both sets of attributes."
module: "cli::style"
kind: "method"
name: "merge"
parent: "Style"
signature: "pub fn merge(Style other) -> Style"
import: "use cli::style::{Style};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/style.hy#L227"
order: 13
---

`self` with `other`'s colours where `other` sets them, and both sets of attributes.

Called on a `Style` value as `value.merge(…)`.

## Parameters

| Name | Type |
|------|------|
| `other` | `Style` |

## Returns

`Style`

## See also

- [`Style`](/packages/cli/reference/cli/style/Style): Foreground, background and attributes.
- [`Style::with_attr`](/packages/cli/reference/cli/style/Style/with_attr)
- [`Style::fg`](/packages/cli/reference/cli/style/Style/fg)
- [`Style::bg`](/packages/cli/reference/cli/style/Style/bg)
- [`Style::bold`](/packages/cli/reference/cli/style/Style/bold)
- [`Style::dim`](/packages/cli/reference/cli/style/Style/dim)
- [`Style::italic`](/packages/cli/reference/cli/style/Style/italic)
- [`Style::underline`](/packages/cli/reference/cli/style/Style/underline)
