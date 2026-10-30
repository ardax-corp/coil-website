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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L182"
order: 6
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

- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
