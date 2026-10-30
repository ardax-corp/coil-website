---
slug: "cli/cli/args/index"
package: "cli"
title: "cli::args"
description: "Declarative argument parsing: flags, options, positionals, subcommands, help and usage errors."
module: "cli::args"
kind: "module"
name: "cli::args"
origin: "package"
auto: false
order: 1
---

Part of the [cli](/packages/cli) package ([coil-cli](https://github.com/ardax-corp/coil-cli)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/cli)).

Import what you use (`use path::*` is not allowed):

```coil
use cli::args::{Arg, Parsed};
```

## Types

| Name | Description |
|------|-------------|
| [`Arg`](/packages/cli/reference/cli/args/Arg) | One declared argument. |
| [`Parsed`](/packages/cli/reference/cli/args/Parsed) | What a successful parse asked for: run with the matches, or print the help text or version line and exit 0. |
| [`ArgError`](/packages/cli/reference/cli/args/ArgError) | A usage mistake (exit 2). |
| [`Matches`](/packages/cli/reference/cli/args/Matches) | The parse result for one command (and its chosen subcommand). |
| [`Command`](/packages/cli/reference/cli/args/Command) | A command: its arguments, subcommands, and help text. |

## Functions

| Name | Description |
|------|-------------|
| [`distance`](/packages/cli/reference/cli/args/distance) | Levenshtein distance, for "did you mean". |
| [`suggest`](/packages/cli/reference/cli/args/suggest) | The closest of `names` to `word`, if close enough to suggest. |
| [`error_message`](/packages/cli/reference/cli/args/error_message) | Text for an error, with the usage line and a pointer to `--help`. |
