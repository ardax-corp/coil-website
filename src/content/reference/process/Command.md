---
slug: "process/Command"
title: "Command"
description: "A program to run: its arguments, environment, working directory and standard streams. Build it with Command::new and the setters, then spawn, status or output. One Command can start any number of children."
module: "process"
kind: "class"
name: "Command"
signature: "class Command"
import: "use process::{Command};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/process.hy#L50"
order: 2
---

A program to run: its arguments, environment, working directory and standard streams. Build it with [`Command::new`](/docs/reference/process/Command/new) and the setters, then [`spawn`](/docs/reference/process/Command/spawn), [`status`](/docs/reference/process/Command/status) or [`output`](/docs/reference/process/Command/output). One `Command` can start any number of children.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/process/Command/new) | A command that runs `program`, found on `PATH` unless it contains a path separator. |

## Methods

| Name | Description |
|------|-------------|
| [`arg`](/docs/reference/process/Command/arg) | Adds one argument. |
| [`args`](/docs/reference/process/Command/args) | Adds each of `values` as an argument. |
| [`env`](/docs/reference/process/Command/env) | Sets environment variable `key` to `value` in the child. |
| [`env_remove`](/docs/reference/process/Command/env_remove) | Removes environment variable `key` from the child's environment. |
| [`env_clear`](/docs/reference/process/Command/env_clear) | Starts the child with an empty environment (then only what [`env`](/docs/reference/process/Command/env) sets). |
| [`cwd`](/docs/reference/process/Command/cwd) | Runs the child in directory `dir`. |
| [`stdin`](/docs/reference/process/Command/stdin) | Where the child's standard input comes from. |
| [`stdout`](/docs/reference/process/Command/stdout) | Where the child's standard output goes. |
| [`stderr`](/docs/reference/process/Command/stderr) | Where the child's standard error goes. |
| [`spawn`](/docs/reference/process/Command/spawn) | Starts the program and returns at once. |
| [`status`](/docs/reference/process/Command/status) | Starts the program, waits for it and returns its exit code. |
| [`output`](/docs/reference/process/Command/output) | Starts the program with its output and error piped, reads both to the end and waits for it. |

## Examples

```coil
use process::{Command};
use tests::assert;
let cmd = Command::new("echo");
cmd.arg("hello");
let out = cmd.output();
let text = match out {
    Result::Ok(o) => o.stdout,
    Result::Err(_) => "",
};
assert!(text == "hello\n");
```

## See also

- [`Command::new`](/docs/reference/process/Command/new)
- [`Command::spawn`](/docs/reference/process/Command/spawn)
- [`Command::status`](/docs/reference/process/Command/status)
- [`Command::output`](/docs/reference/process/Command/output)
- [`Child`](/docs/reference/process/Child): A started child process.
- [`Output`](/docs/reference/process/Output): What `output` collected: the exit code and everything the child wrote.
