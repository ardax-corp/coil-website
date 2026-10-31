---
slug: "cli/cli/args/Command/option_default"
package: "cli"
title: "Command::option_default"
description: "An option with a default value."
module: "cli::args"
kind: "method"
name: "option_default"
parent: "Command"
signature: "pub fn option_default( string name, string short, string value_name, string help, string default, ) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L328"
order: 3
---

An option with a default value.

Called on a `Command` value as `value.option_default(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `short` | `string` |
| `value_name` | `string` |
| `help` | `string` |
| `default` | `string` |

## Returns

`Command`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
- [`Command::optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional): An optional positional argument, filled in declaration order.
