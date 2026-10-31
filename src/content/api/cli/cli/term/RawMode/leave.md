---
slug: "cli/cli/term/RawMode/leave"
package: "cli"
title: "RawMode::leave"
description: "Restore the terminal. Safe to call more than once."
module: "cli::term"
kind: "method"
name: "leave"
parent: "RawMode"
signature: "pub fn leave() -> Result<(), TtyError>"
import: "use cli::term::{RawMode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L123"
order: 0
---

Restore the terminal. Safe to call more than once.

Called on a `RawMode` value as `value.leave(…)`.

## Returns

`Result<(), TtyError>`

## See also

- [`RawMode`](/packages/cli/reference/cli/term/RawMode): Raw mode on a terminal.
- [`RawMode::is_active`](/packages/cli/reference/cli/term/RawMode/is_active): Whether the terminal is still in raw mode through this handle.
