---
slug: "cli/cli/args/Matches"
package: "cli"
title: "Matches"
description: "The parse result for one command (and its chosen subcommand)."
module: "cli::args"
kind: "class"
name: "Matches"
signature: "class Matches"
import: "use cli::args::{Matches};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L60"
order: 3
---

The parse result for one command (and its chosen subcommand).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `command` | `string` |  |
| `sub_name` | `string` |  |
| `sub` | `Vec<Matches>` |  |

## Methods

| Name | Description |
|------|-------------|
| [`count`](/packages/cli/reference/cli/args/Matches/count) | Times a flag was given (0 when absent). |
| [`flag`](/packages/cli/reference/cli/args/Matches/flag) | Whether a flag (or an option) was given. |
| [`value`](/packages/cli/reference/cli/args/Matches/value) | Last value of an option or a positional, the default when not given, or `None`. |
| [`value_or`](/packages/cli/reference/cli/args/Matches/value_or) |  |
| [`values`](/packages/cli/reference/cli/args/Matches/values) | Every value of a repeatable option or a rest positional. |
| [`subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name) | The chosen subcommand's name, or "". |
| [`subcommand`](/packages/cli/reference/cli/args/Matches/subcommand) | The chosen subcommand's matches. |
| [`add_count`](/packages/cli/reference/cli/args/Matches/add_count) |  |
| [`add_value`](/packages/cli/reference/cli/args/Matches/add_value) |  |

## See also

- [`Arg`](/packages/cli/reference/cli/args/Arg): One declared argument.
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
