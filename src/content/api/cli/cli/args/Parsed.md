---
slug: "cli/cli/args/Parsed"
package: "cli"
title: "Parsed"
description: "What a successful parse asked for: run with the matches, or print the help text or version line and exit 0."
module: "cli::args"
kind: "enum"
name: "Parsed"
signature: "enum Parsed"
import: "use cli::args::{Parsed};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L34"
order: 1
---

What a successful parse asked for: run with the matches, or print the help text or version line and exit 0.

## Variants

### `Matches(Matches)` {#variant-matches}

Normal arguments: the matches for the command.

### `Help(string)` {#variant-help}

`-h` / `--help`: the help text to print.

### `Version(string)` {#variant-version}

`-V` / `--version`: the version line to print.

## See also

- [`ArgError`](/packages/cli/reference/cli/args/ArgError): A usage mistake (exit 2).
