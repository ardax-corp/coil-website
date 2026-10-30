---
slug: "cli/cli/args/error_message"
package: "cli"
title: "error_message"
description: "Text for an error, with the usage line and a pointer to --help."
module: "cli::args"
kind: "fn"
name: "error_message"
signature: "fn error_message(Command c, ArgError e) -> string"
import: "use cli::args::{error_message};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L653"
order: 7
---

Text for an error, with the usage line and a pointer to `--help`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Command` |
| `e` | `ArgError` |

## Returns

`string`

## See also

- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
