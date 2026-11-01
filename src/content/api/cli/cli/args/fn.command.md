---
slug: "cli/cli/args/fn.command"
package: "cli"
title: "command"
description: "A command named name with the description about and no arguments yet."
module: "cli::args"
kind: "fn"
name: "command"
signature: "fn command(string name, string about) -> Command"
import: "use cli::args::{command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L186"
order: 10
---

A command named `name` with the description `about` and no arguments yet.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |
| `about` | `string` |

## Returns

`Command`

## See also

- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
- [`parse_args`](/packages/cli/reference/cli/args/parse_args): Parse `argv` (without the program name) against `cmd`; the same as `cmd.parse(argv)`.
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
