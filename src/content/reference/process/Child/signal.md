---
slug: "process/Child/signal"
title: "Child::signal"
description: "Sends POSIX signal sig (15 is SIGTERM, 2 SIGINT) to the child."
module: "process"
kind: "method"
name: "signal"
parent: "Child"
signature: "pub fn signal(int sig) -> Result<unit, ProcessError>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L365"
order: 8
---

Sends POSIX signal `sig` (15 is `SIGTERM`, 2 `SIGINT`) to the child.

Called on a `Child` value as `value.signal(…)`.

## Parameters

| Name | Type |
|------|------|
| `sig` | `int` |

## Returns

`Result<unit, ProcessError>`

## Errors

`Err(ProcessError::Io(IoError::InvalidInput))` on Windows, for a
child that was already waited for, and for an unknown signal.

## See also

- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
- [`Child::output`](/docs/reference/process/Child/output): Reads the output and error pipes not yet taken to the end, then waits.
