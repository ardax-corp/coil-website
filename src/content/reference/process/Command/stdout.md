---
slug: "process/Command/stdout"
title: "Command::stdout"
description: "Where the child's standard output goes."
module: "process"
kind: "method"
name: "stdout"
parent: "Command"
signature: "pub fn stdout(Stdio mode)"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/process.hy#L197"
order: 8
---

Where the child's standard output goes.

Called on a `Command` value as `value.stdout(…)`.

## Parameters

| Name | Type |
|------|------|
| `mode` | `Stdio` |

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
