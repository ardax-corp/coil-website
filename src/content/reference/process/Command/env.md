---
slug: "process/Command/env"
title: "Command::env"
description: "Sets environment variable key to value in the child. The last env or env_remove of a key wins."
module: "process"
kind: "method"
name: "env"
parent: "Command"
signature: "pub fn env(string key, string value)"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L167"
order: 3
---

Sets environment variable `key` to `value` in the child. The last [`env`](/docs/reference/env) or [`env_remove`](/docs/reference/process/Command/env_remove) of a key wins.

Called on a `Command` value as `value.env(…)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `string` |
| `value` | `string` |

## See also

- [`env`](/docs/reference/env)
- [`Command::env_remove`](/docs/reference/process/Command/env_remove)
- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Command::new`](/docs/reference/process/Command/new): A command that runs `program`, found on `PATH` unless it contains a path separator.
- [`Command::arg`](/docs/reference/process/Command/arg): Adds one argument.
- [`Command::args`](/docs/reference/process/Command/args): Adds each of `values` as an argument.
- [`Command::env_clear`](/docs/reference/process/Command/env_clear): Starts the child with an empty environment (then only what `env` sets).
- [`Command::cwd`](/docs/reference/process/Command/cwd): Runs the child in directory `dir`.
