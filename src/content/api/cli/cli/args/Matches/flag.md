---
slug: "cli/cli/args/Matches/flag"
package: "cli"
title: "Matches::flag"
description: "Whether a flag (or an option) was given."
module: "cli::args"
kind: "method"
name: "flag"
parent: "Matches"
signature: "pub fn flag(string name) -> bool"
import: "use cli::args::{Matches};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L92"
order: 1
---

Whether a flag (or an option) was given.

Called on a `Matches` value as `value.flag(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`bool`

## See also

- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
- [`Matches::count`](/packages/cli/reference/cli/args/Matches/count): Times a flag was given (0 when absent).
- [`Matches::value`](/packages/cli/reference/cli/args/Matches/value): Last value of an option or a positional, the default when not given, or `None`.
- [`Matches::value_or`](/packages/cli/reference/cli/args/Matches/value_or): `value(name)`, or `fallback` when there is none.
- [`Matches::values`](/packages/cli/reference/cli/args/Matches/values): Every value of a repeatable option or a rest positional.
- [`Matches::subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name): The chosen subcommand's name, or "".
- [`Matches::subcommand`](/packages/cli/reference/cli/args/Matches/subcommand): The chosen subcommand's matches.
- [`Matches::add_count`](/packages/cli/reference/cli/args/Matches/add_count): Record one more occurrence of `name` (used by the parser).
