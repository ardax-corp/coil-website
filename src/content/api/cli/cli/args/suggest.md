---
slug: "cli/cli/args/suggest"
package: "cli"
title: "suggest"
description: "The closest of names to word, if close enough to suggest."
module: "cli::args"
kind: "fn"
name: "suggest"
signature: "fn suggest(string word, Vec<string> names) -> string"
import: "use cli::args::{suggest};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L231"
order: 12
---

The closest of `names` to `word`, if close enough to suggest.

## Parameters

| Name | Type |
|------|------|
| `word` | `string` |
| `names` | `Vec<string>` |

## Returns

`string`

## See also

- [`command`](/packages/cli/reference/cli/args/fn.command): A command named `name` with the description `about` and no arguments yet.
- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`parse_args`](/packages/cli/reference/cli/args/parse_args): Parse `argv` (without the program name) against `cmd`; the same as `cmd.parse(argv)`.
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
