---
slug: "cli/cli/args/Matches"
package: "cli"
title: "Matches"
description: "The parse result for one command (and its chosen subcommand). Look values up by the argument's long name."
module: "cli::args"
kind: "class"
name: "Matches"
signature: "class Matches"
import: "use cli::args::{Matches};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L74"
order: 3
---

The parse result for one command (and its chosen subcommand). Look values up by the argument's long name.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `command` | `string` | Name of the command these matches are for. |
| `sub_name` | `string` | The chosen subcommand's name, or "" (see [`subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name)). |
| `sub` | `Vec<Matches>` | The chosen subcommand's matches, zero or one (see [`subcommand`](/packages/cli/reference/cli/args/Matches/subcommand)). |

## Methods

| Name | Description |
|------|-------------|
| [`count`](/packages/cli/reference/cli/args/Matches/count) | Times a flag was given (0 when absent). |
| [`flag`](/packages/cli/reference/cli/args/Matches/flag) | Whether a flag (or an option) was given. |
| [`value`](/packages/cli/reference/cli/args/Matches/value) | Last value of an option or a positional, the default when not given, or `None`. |
| [`value_or`](/packages/cli/reference/cli/args/Matches/value_or) | `value(name)`, or `fallback` when there is none. |
| [`values`](/packages/cli/reference/cli/args/Matches/values) | Every value of a repeatable option or a rest positional. |
| [`subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name) | The chosen subcommand's name, or "". |
| [`subcommand`](/packages/cli/reference/cli/args/Matches/subcommand) | The chosen subcommand's matches. |
| [`add_count`](/packages/cli/reference/cli/args/Matches/add_count) | Record one more occurrence of `name` (used by the parser). |
| [`add_value`](/packages/cli/reference/cli/args/Matches/add_value) | Record a value for `name` (used by the parser). |

## See also

- [`Matches::subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name)
- [`Matches::subcommand`](/packages/cli/reference/cli/args/Matches/subcommand)
- [`Arg`](/packages/cli/reference/cli/args/Arg): One declared argument, as the `Command` builders make it.
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
