---
slug: "cli/cli/args/Command/multi"
package: "cli"
title: "Command::multi"
description: "A repeatable option; Matches.values has every value."
module: "cli::args"
kind: "method"
name: "multi"
parent: "Command"
signature: "pub fn multi(string name, string short, string value_name, string help) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L300"
order: 5
---

A repeatable option; [`Matches.values`](/packages/cli/reference/cli/args/Matches/values) has every value.

Called on a `Command` value as `value.multi(…)`.

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

- [`Matches::values`](/packages/cli/reference/cli/args/Matches/values)
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
