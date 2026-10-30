---
slug: "process/Command/output"
title: "Command::output"
description: "Starts the program with its output and error piped, reads both to the end and waits for it. Standard input is Null unless set."
module: "process"
kind: "method"
name: "output"
parent: "Command"
signature: "pub fn output() -> Result<Output, ProcessError>"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/process.hy#L234"
order: 12
---

Starts the program with its output and error piped, reads both to the end and waits for it. Standard input is `Null` unless set.

Called on a `Command` value as `value.output(…)`.

## Returns

`Result<Output, ProcessError>`

## Errors

`Err(ProcessError::Spawn(e))` when the program could not be
started, `Err(ProcessError::Io(e))` when reading or waiting failed.

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
