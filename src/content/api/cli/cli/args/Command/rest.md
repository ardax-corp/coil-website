---
slug: "cli/cli/args/Command/rest"
package: "cli"
title: "Command::rest"
description: "Every remaining positional (and everything after --)."
module: "cli::args"
kind: "method"
name: "rest"
parent: "Command"
signature: "pub fn rest(string name, string help, bool required) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L366"
order: 8
---

Every remaining positional (and everything after `--`).

Called on a `Command` value as `value.rest(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `help` | `string` |
| `required` | `bool` |

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
