---
slug: "cli/cli/progress/Spinner/finish"
package: "cli"
title: "Spinner::finish"
description: "Replace the spinner with message (or clear it when \"\")."
module: "cli::progress"
kind: "method"
name: "finish"
parent: "Spinner"
signature: "pub fn finish(string message)"
import: "use cli::progress::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L352"
order: 2
---

Replace the spinner with `message` (or clear it when "").

Called on a `Spinner` value as `value.finish(…)`.

## Parameters

| Name | Type |
|------|------|
| `message` | `string` |

## See also

- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
- [`Spinner::set_label`](/packages/cli/reference/cli/progress/Spinner/set_label)
- [`Spinner::tick`](/packages/cli/reference/cli/progress/Spinner/tick): Advance and redraw, at most every 80ms.
