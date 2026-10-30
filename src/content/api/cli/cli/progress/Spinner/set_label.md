---
slug: "cli/cli/progress/Spinner/set_label"
package: "cli"
title: "Spinner::set_label"
description: "Method Spinner::set_label."
module: "cli::progress"
kind: "method"
name: "set_label"
parent: "Spinner"
signature: "pub fn set_label(string label)"
import: "use cli::progress::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L329"
order: 0
---

*No documentation yet.*

Called on a `Spinner` value as `value.set_label(…)`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## See also

- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
- [`Spinner::tick`](/packages/cli/reference/cli/progress/Spinner/tick): Advance and redraw, at most every 80ms.
- [`Spinner::finish`](/packages/cli/reference/cli/progress/Spinner/finish): Replace the spinner with `message` (or clear it when "").
