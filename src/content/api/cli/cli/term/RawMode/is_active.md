---
slug: "cli/cli/term/RawMode/is_active"
package: "cli"
title: "RawMode::is_active"
description: "Whether the terminal is still in raw mode through this handle."
module: "cli::term"
kind: "method"
name: "is_active"
parent: "RawMode"
signature: "pub fn is_active() -> bool"
import: "use cli::term::{RawMode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L132"
order: 1
---

Whether the terminal is still in raw mode through this handle.

Called on a `RawMode` value as `value.is_active(…)`.

## Returns

`bool`

## See also

- [`RawMode`](/packages/cli/reference/cli/term/RawMode): Raw mode on a terminal.
- [`RawMode::leave`](/packages/cli/reference/cli/term/RawMode/leave): Restore the terminal.
