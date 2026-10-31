---
slug: "cli/cli/args/Command/subcommand"
package: "cli"
title: "Command::subcommand"
description: "A subcommand; its usage lines show this command's name first."
module: "cli::args"
kind: "method"
name: "subcommand"
parent: "Command"
signature: "pub fn subcommand(Command c) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L373"
order: 9
---

A subcommand; its usage lines show this command's name first.

Called on a `Command` value as `value.subcommand(…)`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Command` |

## Returns

`Command`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
