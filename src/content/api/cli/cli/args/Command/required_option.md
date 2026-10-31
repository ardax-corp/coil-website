---
slug: "cli/cli/args/Command/required_option"
package: "cli"
title: "Command::required_option"
description: "An option that must be given."
module: "cli::args"
kind: "method"
name: "required_option"
parent: "Command"
signature: "pub fn required_option(string name, string short, string value_name, string help) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L342"
order: 4
---

An option that must be given.

Called on a `Command` value as `value.required_option(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `short` | `string` |
| `value_name` | `string` |
| `help` | `string` |

## Returns

`Command`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
- [`Command::optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional): An optional positional argument, filled in declaration order.
