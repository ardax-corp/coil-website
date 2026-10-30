---
slug: "process/Child/wait"
title: "Child::wait"
description: "Waits for the child to end and returns its exit code (128 + signal on POSIX when a signal ended it). A standard input pipe not yet taken is closed first. Waiting again returns the same code."
module: "process"
kind: "method"
name: "wait"
parent: "Child"
signature: "pub fn wait() -> Result<int, ProcessError>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/process.hy#L311"
order: 4
---

Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it). A standard input pipe not yet taken is closed first. Waiting again returns the same code.

This blocks the thread; in a [`task::scope`](/docs/reference/task/scope), run it in
[`task::blocking`](/docs/reference/task/blocking) to let other tasks go on.

Called on a `Child` value as `value.wait(…)`.

## Returns

`Result<int, ProcessError>`

## Errors

`Err(ProcessError::Io(e))` when waiting failed.

## See also

- [`task::scope`](/docs/reference/task/scope)
- [`task::blocking`](/docs/reference/task/blocking)
- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
