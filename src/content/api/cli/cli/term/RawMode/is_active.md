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
source: "https://github.com/ardax-corp/coil-cli/blob/05669fce32782c1a5cb55fb2ecff2e1215cd0bfc/src/cli/term.coil#L132"
order: 1
---

Whether the terminal is still in raw mode through this handle.

Called on a `RawMode` value as `value.is_active(…)`.

## Returns

`bool`

## See also

- [`RawMode`](/packages/cli/reference/cli/term/RawMode): Raw mode on a terminal.
- [`RawMode::leave`](/packages/cli/reference/cli/term/RawMode/leave): Restore the terminal.
