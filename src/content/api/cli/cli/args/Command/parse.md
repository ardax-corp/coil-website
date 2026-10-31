---
slug: "cli/cli/args/Command/parse"
package: "cli"
title: "Command::parse"
description: "Parse argv (without the program name). --help and --version are successes (Parsed::Help / Parsed::Version), not errors."
module: "cli::args"
kind: "method"
name: "parse"
parent: "Command"
signature: "pub fn parse(Vec<string> argv) -> Result<Parsed, ArgError>"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L711"
order: 21
---

Parse `argv` (without the program name). `--help` and `--version` are successes ([`Parsed::Help`](/packages/cli/reference/cli/args/Parsed#variant-help) / [`Parsed::Version`](/packages/cli/reference/cli/args/Parsed#variant-version)), not errors.

Called on a `Command` value as `value.parse(…)`.

## Parameters

| Name | Type |
|------|------|
| `argv` | `Vec<string>` |

## Returns

`Result<Parsed, ArgError>`

## See also

- [`cli::args::Parsed`](/packages/cli/reference/cli/args/Parsed)
- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
