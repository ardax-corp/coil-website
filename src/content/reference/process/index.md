---
slug: "process/index"
title: "process"
description: "Run other programs: exit codes, captured output, pipes as streams, environment, working directory and signals."
module: "process"
kind: "module"
name: "process"
origin: "embedded"
auto: false
order: 18
---

`exec(program, argv)` runs a program, waits for it and returns its exit code.
For anything more, build a [`Command`](/docs/reference/process/Command): add arguments, environment and a working
directory, choose what happens to each of stdin, stdout and stderr, then
`status`, `output` (captures stdout and stderr as strings) or `spawn` (a
[`Child`](/docs/reference/process/Child) you can write to, read from, wait on and signal). Piped streams are
ordinary [`io::Stream`](/docs/reference/io)s.

Arguments go to the program as they are, with no shell in between. A child
that a signal ends reports `128 + signal` as its status. `wait` blocks the
thread it runs on; inside a task, run it under [`task::blocking`](/docs/reference/task/blocking).

Starting a program needs `--allow-exec` (error `E0406`); see
[Permissions](/docs/language/permissions). Signals are Unix only: on Windows
`signal` returns `Err(ProcessError::Io(IoError::InvalidInput))`. The wasm
playground cannot start programs.

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use process::{Stdio, ProcessError};
```

## Types

| Name | Description |
|------|-------------|
| [`Stdio`](/docs/reference/process/Stdio) | Where a child's standard stream goes. |
| [`ProcessError`](/docs/reference/process/ProcessError) | Why a process call failed. |
| [`Command`](/docs/reference/process/Command) | A program to run: its arguments, environment, working directory and standard streams. |
| [`Child`](/docs/reference/process/Child) | A started child process. |
| [`Output`](/docs/reference/process/Output) | What `output` collected: the exit code and everything the child wrote. |

## Functions

| Name | Description |
|------|-------------|
| [`exec`](/docs/reference/process/exec) | Runs `program` with `argv` (the arguments after the program name) and waits for it. |
