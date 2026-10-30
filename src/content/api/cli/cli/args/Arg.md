---
slug: "cli/cli/args/Arg"
package: "cli"
title: "Arg"
description: "One declared argument."
module: "cli::args"
kind: "class"
name: "Arg"
signature: "class Arg"
import: "use cli::args::{Arg};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L20"
order: 0
---

One declared argument.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` |  |
| `short` | `string` | Short letter without `-`, or "". |
| `value_name` | `string` |  |
| `help` | `string` |  |
| `kind` | `int` |  |
| `default` | `string` |  |
| `has_default` | `bool` |  |
| `required` | `bool` |  |

## See also

- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
