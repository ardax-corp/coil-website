---
slug: "cli/cli/args/ArgError"
package: "cli"
title: "ArgError"
description: "A usage mistake (exit 2)."
module: "cli::args"
kind: "enum"
name: "ArgError"
signature: "enum ArgError"
import: "use cli::args::{ArgError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L44"
order: 2
---

A usage mistake (exit 2).

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

- [`Parsed`](/packages/cli/reference/cli/args/Parsed): What a successful parse asked for: run with the matches, or print the help text or version line and exit 0.
