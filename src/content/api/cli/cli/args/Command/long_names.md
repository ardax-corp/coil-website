---
slug: "cli/cli/args/Command/long_names"
package: "cli"
title: "Command::long_names"
description: "Every long option name, including help (and version when set), for suggestions."
module: "cli::args"
kind: "method"
name: "long_names"
parent: "Command"
signature: "pub fn long_names() -> Vec<string>"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L401"
order: 12
---

Every long option name, including [`help`](/packages/cli/reference/cli/args/Command/help) (and [`version`](/packages/cli/reference/cli/args/Command/version) when set), for suggestions.

Called on a `Command` value as `value.long_names(…)`.

## Returns

`Vec<string>`

## See also

- [`Command::help`](/packages/cli/reference/cli/args/Command/help)
- [`Command::version`](/packages/cli/reference/cli/args/Command/version)
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
