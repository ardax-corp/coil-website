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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/term.hy#L67"
order: 0
---

Raw mode on a terminal. Leave it with [`leave()`](/packages/cli/reference/cli/term/RawMode/leave); the runtime also restores the terminal if the program ends (exit, panic, signal) while still raw.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `input` | `Stream` |  |
| `active` | `bool` |  |

## Methods

| Name | Description |
|------|-------------|
| [`leave`](/packages/cli/reference/cli/term/RawMode/leave) | Restore the terminal. |
| [`is_active`](/packages/cli/reference/cli/term/RawMode/is_active) |  |

## See also

- [`RawMode::leave`](/packages/cli/reference/cli/term/RawMode/leave)
