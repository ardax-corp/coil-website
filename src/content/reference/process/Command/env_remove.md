---
slug: "process/Command/env_remove"
title: "Command::env_remove"
description: "Removes environment variable key from the child's environment."
module: "process"
kind: "method"
name: "env_remove"
parent: "Command"
signature: "pub fn env_remove(string key)"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L175"
order: 4
---

Removes environment variable `key` from the child's environment.

Called on a `Command` value as `value.env_remove(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
- [`Command::stdin`](/docs/reference/process/Command/stdin): Where the child's standard input comes from.
