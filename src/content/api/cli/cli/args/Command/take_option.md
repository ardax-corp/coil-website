---
slug: "cli/cli/args/Command/take_option"
package: "cli"
title: "Command::take_option"
description: "Record option a found at argv[i] (value inline or in the next argument) and return the index after it (used by the parser)."
module: "cli::args"
kind: "method"
name: "take_option"
parent: "Command"
signature: "pub fn take_option( Arg a, Matches m, Vec<string> argv, int i, string inline, bool has_inline, ) -> Result<int, ArgError>"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L492"
order: 17
---

Record option `a` found at `argv[i]` (value inline or in the next argument) and return the index after it (used by the parser).

Called on a `Command` value as `value.take_option(…)`.

## Parameters

| Name | Type |
|------|------|
| `a` | `Arg` |
| `m` | `Matches` |
| `argv` | `Vec<string>` |
| `i` | `int` |
| `inline` | `string` |
| `has_inline` | `bool` |

## Returns

`Result<int, ArgError>`

## See also

- [`Command`](/packages/cli/reference/cli/args/Command): A command: its arguments, subcommands, and help text.
- [`Command::version`](/packages/cli/reference/cli/args/Command/version): Enables `-V` / `--version`.
- [`Command::flag`](/packages/cli/reference/cli/args/Command/flag): A boolean flag (`--name`, `-s`), counted when repeated.
- [`Command::option`](/packages/cli/reference/cli/args/Command/option): An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`).
- [`Command::option_default`](/packages/cli/reference/cli/args/Command/option_default): An option with a default value.
- [`Command::required_option`](/packages/cli/reference/cli/args/Command/required_option): An option that must be given.
- [`Command::multi`](/packages/cli/reference/cli/args/Command/multi): A repeatable option; `Matches.values` has every value.
- [`Command::positional`](/packages/cli/reference/cli/args/Command/positional): A required positional argument, filled in declaration order.
