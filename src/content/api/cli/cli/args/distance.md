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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L146"
order: 5
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

- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
- [`error_message`](/packages/cli/reference/cli/args/error_message): Text for an error, with the usage line and a pointer to `--help`.
