---
slug: "process/Command/cwd"
title: "Command::cwd"
description: "Runs the child in directory dir."
module: "process"
kind: "method"
name: "cwd"
parent: "Command"
signature: "pub fn cwd(string dir)"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L187"
order: 6
---

Runs the child in directory `dir`.

Called on a `Command` value as `value.cwd(…)`.

## Parameters

| Name | Type |
|------|------|
| `dir` | `string` |

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::stdin`](/docs/reference/process/Command/stdin): Where the child's standard input comes from.
