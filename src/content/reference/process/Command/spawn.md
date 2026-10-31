---
slug: "process/Command/spawn"
title: "Command::spawn"
description: "Starts the program and returns at once. Streams not set otherwise are inherited."
module: "process"
kind: "method"
name: "spawn"
parent: "Command"
signature: "pub fn spawn() -> Result<Child, ProcessError>"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L212"
order: 10
---

Starts the program and returns at once. Streams not set otherwise are inherited.

Called on a `Command` value as `value.spawn(…)`.

## Returns

`Result<Child, ProcessError>`

## Errors

`Err(ProcessError::Spawn(e))` when the program could not be started.

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
