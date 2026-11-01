---
slug: "process/Command/new"
title: "Command::new"
description: "A command that runs program, found on PATH unless it contains a path separator. No shell is involved: pass sh and -c for one."
module: "process"
kind: "static method"
name: "new"
parent: "Command"
signature: "pub static fn new(string program) -> Command"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.coil#L146"
order: 0
---

A command that runs `program`, found on `PATH` unless it contains a path separator. No shell is involved: pass `sh` and `-c` for one.

## Parameters

| Name | Type |
|------|------|
| `program` | `string` |

## Returns

`Command`

## See also

- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env`](/docs/reference/process/Command/env): Sets environment variable `key` to `value` in the child.
- [`Command::env_remove`](/docs/reference/process/Command/env_remove): Removes environment variable `key` from the child's environment.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
- [`Command::stdin`](/docs/reference/process/Command/stdin): Where the child's standard input comes from.
