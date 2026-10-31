---
slug: "cli/cli/args/parse_args"
package: "cli"
title: "parse_args"
description: "Parse argv (without the program name) against cmd; the same as cmd.parse(argv)."
module: "cli::args"
kind: "fn"
name: "parse_args"
signature: "fn parse_args(Command cmd, Vec<string> argv) -> Result<Parsed, ArgError>"
import: "use cli::args::{parse_args};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L587"
order: 13
---

Parse `argv` (without the program name) against `cmd`; the same as `cmd.parse(argv)`.

## Parameters

| Name | Type |
|------|------|
| `cmd` | `Command` |
| `argv` | `Vec<string>` |

## Returns

`Result<Parsed, ArgError>`

## See also

- [`command`](/packages/cli/reference/cli/args/fn.command): A command named `name` with the description `about` and no arguments yet.
- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
