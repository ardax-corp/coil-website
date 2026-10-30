---
slug: "process/Child/kill"
title: "Child::kill"
description: "Ends the child at once (SIGKILL; TerminateProcess on Windows). Killing a child that already ended does nothing."
module: "process"
kind: "method"
name: "kill"
parent: "Child"
signature: "pub fn kill() -> Result<unit, ProcessError>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/process.hy#L352"
order: 7
---

Ends the child at once (`SIGKILL`; `TerminateProcess` on Windows). Killing a child that already ended does nothing.

Called on a `Child` value as `value.kill(…)`.

## Returns

`Result<unit, ProcessError>`

## Errors

`Err(ProcessError::Io(e))` when the OS refused.

## See also

- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
- [`Child::output`](/docs/reference/process/Child/output): Reads the output and error pipes not yet taken to the end, then waits.
