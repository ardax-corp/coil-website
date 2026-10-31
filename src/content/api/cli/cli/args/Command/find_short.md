---
slug: "cli/cli/args/Command/find_short"
package: "cli"
title: "Command::find_short"
description: "The flag or option declared with short letter s."
module: "cli::args"
kind: "method"
name: "find_short"
parent: "Command"
signature: "pub fn find_short(string s) -> Option<Arg>"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L390"
order: 11
---

The flag or option declared with short letter `s`.

Called on a `Command` value as `value.find_short(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Option<Arg>`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
