---
slug: "process/Command/env_clear"
title: "Command::env_clear"
description: "Starts the child with an empty environment (then only what env sets)."
module: "process"
kind: "method"
name: "env_clear"
parent: "Command"
signature: "pub fn env_clear()"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.coil#L182"
order: 5
---

Starts the child with an empty environment (then only what [`env`](/docs/reference/process/Command/env) sets).

Called on a `Command` value as `value.env_clear(…)`.

## See also

- [`Command::env`](/docs/reference/process/Command/env)
- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
- [`Command::stdin`](/docs/reference/process/Command/stdin): Where the child's standard input comes from.
