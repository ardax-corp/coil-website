---
slug: "cli/cli/args/Command/version"
package: "cli"
title: "Command::version"
description: "Enables -V / --version."
module: "cli::args"
kind: "method"
name: "version"
parent: "Command"
signature: "pub fn version(string v) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L307"
order: 0
---

Enables `-V` / `--version`.

Called on a `Command` value as `value.version(…)`.

## Parameters

| Name | Type |
|------|------|
| `v` | `string` |

## Returns

`Command`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
- [`Command::optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional): An optional positional argument, filled in declaration order.
