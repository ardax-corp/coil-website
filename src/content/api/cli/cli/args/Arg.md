---
slug: "cli/cli/args/Arg"
package: "cli"
title: "Arg"
description: "One declared argument, as the Command builders make it."
module: "cli::args"
kind: "class"
name: "Arg"
signature: "class Arg"
import: "use cli::args::{Arg};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.coil#L25"
order: 0
---

One declared argument, as the [`Command`](/packages/cli/reference/cli/args/Command) builders make it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Long name without `--` (also the key in [`Matches`](/packages/cli/reference/cli/args/Matches)). |
| `short` | `string` | Short letter without `-`, or "". |
| `value_name` | `string` | Placeholder for the value in help (`<FILE>`). |
| `help` | `string` | One-line description for the help text. |
| `kind` | `int` | [`FLAG`](/packages/cli/reference/cli/args/FLAG), [`OPTION`](/packages/cli/reference/cli/args/OPTION), [`MULTI`](/packages/cli/reference/cli/args/MULTI), [`POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL) or [`REST`](/packages/cli/reference/cli/args/REST). |
| `default` | `string` | Value used when the option is not given (with `has_default`). |
| `has_default` | `bool` | Whether `default` applies. |
| `required` | `bool` | Whether parsing fails without it. |

## See also

- [`cli::args::Command`](/packages/cli/reference/cli/args/Command)
- [`cli::args::Matches`](/packages/cli/reference/cli/args/Matches)
- [`cli::args::FLAG`](/packages/cli/reference/cli/args/FLAG)
- [`cli::args::OPTION`](/packages/cli/reference/cli/args/OPTION)
- [`cli::args::MULTI`](/packages/cli/reference/cli/args/MULTI)
- [`cli::args::POSITIONAL`](/packages/cli/reference/cli/args/POSITIONAL)
- [`cli::args::REST`](/packages/cli/reference/cli/args/REST)
