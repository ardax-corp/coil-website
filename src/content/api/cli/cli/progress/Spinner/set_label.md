---
slug: "cli/cli/progress/Spinner/set_label"
package: "cli"
title: "Spinner::set_label"
description: "Change the label; shown on the next tick."
module: "cli::progress"
kind: "method"
name: "set_label"
parent: "Spinner"
signature: "pub fn set_label(string label)"
import: "use cli::progress::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/progress.coil#L414"
order: 0
---

Change the label; shown on the next [`tick`](/packages/cli/reference/cli/progress/Spinner/tick).

Called on a `Spinner` value as `value.set_label(…)`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |

## See also

- [`Spinner::tick`](/packages/cli/reference/cli/progress/Spinner/tick)
- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
- [`Spinner::finish`](/packages/cli/reference/cli/progress/Spinner/finish): Replace the spinner with `message` (or clear it when "").
