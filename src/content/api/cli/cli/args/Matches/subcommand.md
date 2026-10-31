---
slug: "cli/cli/args/Matches/subcommand"
package: "cli"
title: "Matches::subcommand"
description: "The chosen subcommand's matches."
module: "cli::args"
kind: "method"
name: "subcommand"
parent: "Matches"
signature: "pub fn subcommand() -> Option<Matches>"
import: "use cli::args::{Matches};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/args.hy#L122"
order: 6
---

The chosen subcommand's matches.

Called on a `Matches` value as `value.subcommand(…)`.

## Returns

`Option<Matches>`

## See also

- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
- [`Matches::count`](/packages/cli/reference/cli/args/Matches/count): Times a flag was given (0 when absent).
- [`Matches::flag`](/packages/cli/reference/cli/args/Matches/flag): Whether a flag (or an option) was given.
- [`Matches::value`](/packages/cli/reference/cli/args/Matches/value): Last value of an option or a positional, the default when not given, or `None`.
- [`Matches::value_or`](/packages/cli/reference/cli/args/Matches/value_or): `value(name)`, or `fallback` when there is none.
- [`Matches::values`](/packages/cli/reference/cli/args/Matches/values): Every value of a repeatable option or a rest positional.
- [`Matches::subcommand_name`](/packages/cli/reference/cli/args/Matches/subcommand_name): The chosen subcommand's name, or "".
- [`Matches::add_count`](/packages/cli/reference/cli/args/Matches/add_count): Record one more occurrence of `name` (used by the parser).
