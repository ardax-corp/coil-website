---
slug: "process/Command/status"
title: "Command::status"
description: "Starts the program, waits for it and returns its exit code."
module: "process"
kind: "method"
name: "status"
parent: "Command"
signature: "pub fn status() -> Result<int, ProcessError>"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L222"
order: 11
---

Starts the program, waits for it and returns its exit code.

Called on a `Command` value as `value.status(…)`.

## Returns

`Result<int, ProcessError>`

## Errors

`Err(ProcessError::Spawn(e))` when the program could not be
started, `Err(ProcessError::Io(e))` when waiting failed.

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
