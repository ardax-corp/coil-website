---
slug: "cli/cli/args/Command/finish"
package: "cli"
title: "Command::finish"
description: "Check required options and fill in defaults (used by the parser)."
module: "cli::args"
kind: "method"
name: "finish"
parent: "Command"
signature: "pub fn finish(Matches m) -> Result<(), ArgError>"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L568"
order: 20
---

Check required options and fill in defaults (used by the parser).

Called on a `Command` value as `value.finish(…)`.

## Parameters

| Name | Type |
|------|------|
| `m` | `Matches` |

## Returns

`Result<(), ArgError>`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
