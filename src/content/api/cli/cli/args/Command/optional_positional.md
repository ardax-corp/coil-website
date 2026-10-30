---
slug: "cli/cli/args/Command/optional_positional"
package: "cli"
title: "Command::optional_positional"
description: "Method Command::optional_positional."
module: "cli::args"
kind: "method"
name: "optional_positional"
parent: "Command"
signature: "pub fn optional_positional(string name, string help) -> Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L311"
order: 7
---

*No documentation yet.*

Called on a `Command` value as `value.optional_positional(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `help` | `string` |

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
