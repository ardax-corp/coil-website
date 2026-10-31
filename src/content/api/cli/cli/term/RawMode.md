---
slug: "cli/cli/term/RawMode"
package: "cli"
title: "RawMode"
description: "Raw mode on a terminal. Leave it with leave(); the runtime also restores the terminal if the program ends (exit, panic, signal) while still raw."
module: "cli::term"
kind: "class"
name: "RawMode"
signature: "class RawMode"
import: "use cli::term::{RawMode};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/term.hy#L87"
order: 0
---

Raw mode on a terminal. Leave it with [`leave()`](/packages/cli/reference/cli/term/RawMode/leave); the runtime also restores the terminal if the program ends (exit, panic, signal) while still raw.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `input` | `Stream` | The terminal stream that was put in raw mode. |
| `active` | `bool` | `true` until [`leave`](/packages/cli/reference/cli/term/RawMode/leave) restores the terminal. |

## Methods

| Name | Description |
|------|-------------|
| [`leave`](/packages/cli/reference/cli/term/RawMode/leave) | Restore the terminal. |
| [`is_active`](/packages/cli/reference/cli/term/RawMode/is_active) | Whether the terminal is still in raw mode through this handle. |

## See also

- [`RawMode::leave`](/packages/cli/reference/cli/term/RawMode/leave)
