---
slug: "cli/cli/args/Matches/count"
package: "cli"
title: "Matches::count"
description: "Times a flag was given (0 when absent)."
module: "cli::args"
kind: "method"
name: "count"
parent: "Matches"
signature: "pub fn count(string name) -> int"
import: "use cli::args::{Matches};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/args.hy#L70"
order: 0
---

Times a flag was given (0 when absent).

Called on a `Matches` value as `value.count(…)`.

## Parameters

| Name | Type |
|------|------|
| `name` | `string` |

## Returns

`int`

## See also

- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
- [`Matches::flag`](/packages/cli/reference/cli/args/Matches/flag): Whether a flag (or an option) was given.
- [`Matches::value`](/packages/cli/reference/cli/args/Matches/value): Last value of an option or a positional, the default when not given, or `None`.
- [`Matches::value_or`](/packages/cli/reference/cli/args/Matches/value_or)
- [`Matches::values`](/packages/cli/reference/cli/args/Matches/values): Every value of a repeatable option or a rest positional.
- [`Matches::subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name): The chosen subcommand's name, or "".
- [`Matches::subcommand`](/packages/cli/reference/cli/args/Matches/subcommand): The chosen subcommand's matches.
- [`Matches::add_count`](/packages/cli/reference/cli/args/Matches/add_count)
