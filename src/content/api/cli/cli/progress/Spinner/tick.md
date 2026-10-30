---
slug: "cli/cli/progress/Spinner/tick"
package: "cli"
title: "Spinner::tick"
description: "Advance and redraw, at most every 80ms."
module: "cli::progress"
kind: "method"
name: "tick"
parent: "Spinner"
signature: "pub fn tick()"
import: "use cli::progress::{Spinner};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/progress.hy#L334"
order: 1
---

Advance and redraw, at most every 80ms.

Called on a `Spinner` value as `value.tick(…)`.

## See also

- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
- [`Spinner::set_label`](/packages/cli/reference/cli/progress/Spinner/set_label)
- [`Spinner::finish`](/packages/cli/reference/cli/progress/Spinner/finish): Replace the spinner with `message` (or clear it when "").
