---
slug: "process/Child/output"
title: "Child::output"
description: "Reads the output and error pipes not yet taken to the end, then waits. A stream that was not piped, or was taken, reads as \"\"."
module: "process"
kind: "method"
name: "output"
parent: "Child"
signature: "pub fn output() -> Result<Output, ProcessError>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/process.hy#L336"
order: 6
---

Reads the output and error pipes not yet taken to the end, then waits. A stream that was not piped, or was taken, reads as `""`.

Called on a `Child` value as `value.output(…)`.

## Returns

`Result<Output, ProcessError>`

## Errors

`Err(ProcessError::Io(e))` when reading or waiting failed.

## See also

- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
- [`Child::kill`](/docs/reference/process/Child/kill): Ends the child at once (`SIGKILL`; `TerminateProcess` on Windows).
