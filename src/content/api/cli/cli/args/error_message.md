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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L731"
order: 14
---

Text for an error, with the usage line and a pointer to `--help`.

## Parameters

| Name | Type |
|------|------|
| `c` | `Command` |
| `e` | `ArgError` |

## Returns

`string`

## Examples

```coil
use cli::args::{ArgError, command, error_message};
use text::Searchable;
use tests::assert;
let cmd = command("tool", "").flag("verbose", "v", "");
let err = match cmd.parse(["--verbos"]) {
    Result::Err(e) => e,
    Result::Ok(_) => panic("parsed"),
};
assert!(error_message(cmd, err).starts_with("error: unexpected option '--verbos' (did you mean '--verbose'?)"));
```

## See also

- [`command`](/packages/cli/reference/cli/args/fn.command): A command named `name` with the description `about` and no arguments yet.
- [`distance`](/packages/cli/reference/cli/args/distance): Levenshtein distance, for "did you mean".
- [`suggest`](/packages/cli/reference/cli/args/suggest): The closest of `names` to `word`, if close enough to suggest.
- [`parse_args`](/packages/cli/reference/cli/args/parse_args): Parse `argv` (without the program name) against `cmd`; the same as `cmd.parse(argv)`.
