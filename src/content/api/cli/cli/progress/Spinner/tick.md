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
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/progress.hy#L419"
order: 1
---

Advance and redraw, at most every 80ms.

Called on a `Spinner` value as `value.tick(…)`.

## See also

- [`Spinner`](/packages/cli/reference/cli/progress/Spinner): A redrawing spinner; call `tick` from the work loop.
- [`Spinner::set_label`](/packages/cli/reference/cli/progress/Spinner/set_label): Change the label; shown on the next `tick`.
- [`Spinner::finish`](/packages/cli/reference/cli/progress/Spinner/finish): Replace the spinner with `message` (or clear it when "").
