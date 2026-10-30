---
slug: "cli/cli/args/Command"
package: "cli"
title: "Command"
description: "A command: its arguments, subcommands, and help text."
module: "cli::args"
kind: "class"
name: "Command"
signature: "class Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L127"
order: 4
---

A command: its arguments, subcommands, and help text.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` |  |
| `about` | `string` |  |
| `version` | `string` |  |
| `args` | `Vec<Arg>` |  |
| `commands` | `Vec<Command>` |  |
| `path` | `string` | The program name shown in usage lines ("tool sub"). |

## Methods

| Name | Description |
|------|-------------|
| [`version`](/packages/cli/reference/cli/args/Command/version) | Enables `-V` / `--version`. |
| [`flag`](/packages/cli/reference/cli/args/Command/flag) | A boolean flag (`--name`, `-s`), counted when repeated. |
| [`option`](/packages/cli/reference/cli/args/Command/option) | An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`). |
| [`option_default`](/packages/cli/reference/cli/args/Command/option_default) | An option with a default value. |
| [`required_option`](/packages/cli/reference/cli/args/Command/required_option) | An option that must be given. |
| [`multi`](/packages/cli/reference/cli/args/Command/multi) | A repeatable option; [`Matches.values`](/packages/cli/reference/cli/args/Matches/values) has every value. |
| [`positional`](/packages/cli/reference/cli/args/Command/positional) | A required positional argument, filled in declaration order. |
| [`optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional) |  |
| [`rest`](/packages/cli/reference/cli/args/Command/rest) | Every remaining positional (and everything after `--`). |
| [`subcommand`](/packages/cli/reference/cli/args/Command/subcommand) | A subcommand; its usage lines show this command's name first. |
| [`find_long`](/packages/cli/reference/cli/args/Command/find_long) |  |
| [`find_short`](/packages/cli/reference/cli/args/Command/find_short) |  |
| [`long_names`](/packages/cli/reference/cli/args/Command/long_names) |  |
| [`command_names`](/packages/cli/reference/cli/args/Command/command_names) |  |
| [`has_options`](/packages/cli/reference/cli/args/Command/has_options) |  |
| [`usage`](/packages/cli/reference/cli/args/Command/usage) | One-line usage: `tool [options] <input> [files]...`. |
| [`help`](/packages/cli/reference/cli/args/Command/help) | Full help text. |
| [`take_option`](/packages/cli/reference/cli/args/Command/take_option) |  |
| [`accepts_positionals`](/packages/cli/reference/cli/args/Command/accepts_positionals) |  |
| [`fill_positionals`](/packages/cli/reference/cli/args/Command/fill_positionals) |  |
| [`finish`](/packages/cli/reference/cli/args/Command/finish) |  |
| [`parse`](/packages/cli/reference/cli/args/Command/parse) | Parse `argv` (without the program name). |

## See also

- [`Arg`](/packages/cli/reference/cli/args/Arg): One declared argument.
- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
