---
slug: "cli/cli/args/ArgError"
package: "cli"
title: "ArgError"
description: "A usage mistake (exit 2). error_message turns one into text for stderr."
module: "cli::args"
kind: "enum"
name: "ArgError"
signature: "enum ArgError"
import: "use cli::args::{ArgError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L57"
order: 2
---

A usage mistake (exit 2). [`error_message`](/packages/cli/reference/cli/args/error_message) turns one into text for stderr.

## Variants

### `UnknownOption(string, string)` {#variant-unknownoption}

An option nobody declared, with a suggestion or "".

### `MissingValue(string)` {#variant-missingvalue}

An option that needs a value got none.

### `Missing(string)` {#variant-missing}

A required argument was not given.

### `Unexpected(string)` {#variant-unexpected}

A positional argument nobody asked for.

### `UnknownCommand(string, string)` {#variant-unknowncommand}

A subcommand nobody declared, with a suggestion or "".

### `FlagValue(string)` {#variant-flagvalue}

A value was given to a flag (`--verbose=yes`).

## See also

- [`cli::args::error_message`](/packages/cli/reference/cli/args/error_message)
- [`Parsed`](/packages/cli/reference/cli/args/Parsed): What a successful parse asked for: run with the matches, or print the help text or version line and exit 0.
