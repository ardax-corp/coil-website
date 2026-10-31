---
slug: "cli/cli/args/distance"
package: "cli"
title: "distance"
description: "Levenshtein distance, for \"did you mean\"."
module: "cli::args"
kind: "fn"
name: "distance"
signature: "fn distance(string a, string b) -> int"
import: "use cli::args::{distance};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L195"
order: 11
---

Levenshtein distance, for "did you mean".

## Parameters

| Name | Type |
|------|------|
| `a` | `string` |
| `b` | `string` |

## Returns

`int`

## See also

- [`command`](/packages/cli/reference/cli/args/fn.command): A command named `name` with the description `about` and no arguments yet.
- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
- [`parse_args`](/packages/cli/reference/cli/args/parse_args): Parse `argv` (without the program name) against `cmd`; the same as `cmd.parse(argv)`.
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
