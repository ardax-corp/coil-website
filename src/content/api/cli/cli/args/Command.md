---
slug: "cli/cli/args/Command"
package: "cli"
title: "Command"
description: "A command: its arguments, subcommands, and help text. Build it with command and the chained declarations, then parse the arguments."
module: "cli::args"
kind: "class"
name: "Command"
signature: "class Command"
import: "use cli::args::{Command};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/args.hy#L169"
order: 4
---

A command: its arguments, subcommands, and help text. Build it with [`command`](/packages/cli/reference/cli/args/fn.command) and the chained declarations, then [`parse`](/packages/cli/reference/cli/args/Command/parse) the arguments.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | The command's name. |
| `about` | `string` | One-line description, the first line of the help. |
| `version` | `string` | Version string; "" leaves `-V` / `--version` out. |
| `args` | `Vec<Arg>` | Declared arguments, in order. |
| `commands` | `Vec<Command>` | Declared subcommands. |
| `path` | `string` | The program name shown in usage lines ("tool sub"). |

## Methods

| Name | Description |
|------|-------------|
| [`version`](/packages/cli/reference/cli/args/Command/version) | Enables `-V` / `--version`. |
| [`flag`](/packages/cli/reference/cli/args/Command/flag) | A boolean flag (`--name`, `-s`), counted when repeated. |
| [`option`](/packages/cli/reference/cli/args/Command/option) | An option taking a value (`--name VALUE`, `--name=VALUE`, `-sVALUE`). |
| [`option_default`](/packages/cli/reference/cli/args/Command/option_default) | An option with a default value. |
| [`required_option`](/packages/cli/reference/cli/args/Command/required_option) | An option that must be given. |
| [`multi`](/packages/cli/reference/cli/args/Command/multi) | A repeatable option; [`Matches.values`](/packages/cli/reference/cli/args/Matches/values) has every value. |
| [`positional`](/packages/cli/reference/cli/args/Command/positional) | A required positional argument, filled in declaration order. |
| [`optional_positional`](/packages/cli/reference/cli/args/Command/optional_positional) | An optional positional argument, filled in declaration order. |
| [`rest`](/packages/cli/reference/cli/args/Command/rest) | Every remaining positional (and everything after `--`). |
| [`subcommand`](/packages/cli/reference/cli/args/Command/subcommand) | A subcommand; its usage lines show this command's name first. |
| [`find_long`](/packages/cli/reference/cli/args/Command/find_long) | The flag or option declared with long name `name`. |
| [`find_short`](/packages/cli/reference/cli/args/Command/find_short) | The flag or option declared with short letter `s`. |
| [`long_names`](/packages/cli/reference/cli/args/Command/long_names) | Every long option name, including [`help`](/packages/cli/reference/cli/args/Command/help) (and [`version`](/packages/cli/reference/cli/args/Command/version) when set), for suggestions. |
| [`command_names`](/packages/cli/reference/cli/args/Command/command_names) | Names of the subcommands. |
| [`has_options`](/packages/cli/reference/cli/args/Command/has_options) | Whether any flag or option is declared. |
| [`usage`](/packages/cli/reference/cli/args/Command/usage) | One-line usage: `tool [options] <input> [files]...`. |
| [`help`](/packages/cli/reference/cli/args/Command/help) | Full help text. |
| [`take_option`](/packages/cli/reference/cli/args/Command/take_option) | Record option `a` found at `argv[i]` (value inline or in the next argument) and return the index after it (used by the parser). |
| [`accepts_positionals`](/packages/cli/reference/cli/args/Command/accepts_positionals) | Whether any positional or rest argument is declared. |
| [`fill_positionals`](/packages/cli/reference/cli/args/Command/fill_positionals) | Assign `positionals` to the declared positional arguments in order (used by the parser). |
| [`finish`](/packages/cli/reference/cli/args/Command/finish) | Check required options and fill in defaults (used by the parser). |
| [`parse`](/packages/cli/reference/cli/args/Command/parse) | Parse `argv` (without the program name). |

## Examples

```coil
use cli::args::{Parsed, command};
use tests::assert;
let cmd = command("greet", "Say hello")
    .version("1.0")
    .flag("verbose", "v", "Say more")
    .option_default("name", "n", "NAME", "Who to greet", "world")
    .rest("extra", "Anything else", false);
let parsed = cmd.parse(["-vv", "--name=Ada", "x", "y"]).ok() ?? panic("bad args");
let m = match parsed {
    Parsed::Matches(m) => m,
    default => panic("help or version"),
};
assert!(m.count("verbose") == 2);
assert!(m.value_or("name", "") == "Ada");
assert!(m.values("extra").len() == 2);
assert!(cmd.usage() == "Usage: greet [options] [extra]...");
```

## See also

- [`cli::args::command`](/packages/cli/reference/cli/args/fn.command)
- [`Command::parse`](/packages/cli/reference/cli/args/Command/parse)
- [`Arg`](/packages/cli/reference/cli/args/Arg): One declared argument, as the `Command` builders make it.
- [`Matches`](/packages/cli/reference/cli/args/Matches): The parse result for one command (and its chosen subcommand).
