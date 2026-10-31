---
slug: "cli/cli/args/Command/flag"
package: "cli"
title: "Command::flag"
description: "A boolean flag (--name, -s), counted when repeated."
module: "cli::args"
kind: "method"
name: "flag"
parent: "Command"
signature: "pub fn flag(string name, string short, string help) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L318"
order: 1
---

A boolean flag (`--name`, `-s`), counted when repeated.

Called on a `Command` value as `value.flag(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `short` | `string` |
| `help` | `string` |

## Returns

`Command`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
- [`Command::optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional): An optional positional argument, filled in declaration order.
