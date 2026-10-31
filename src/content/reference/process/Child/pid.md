---
slug: "process/Child/pid"
title: "Child::pid"
description: "The child's OS process id."
module: "process"
kind: "method"
name: "pid"
parent: "Child"
signature: "pub fn pid() -> int"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L278"
order: 0
---

The child's OS process id.

Called on a `Child` value as `value.pid(…)`.

## Returns

`int`

## See also

- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
- [`Child::output`](/docs/reference/process/Child/output): Reads the output and error pipes not yet taken to the end, then waits.
- [`Child::kill`](/docs/reference/process/Child/kill): Ends the child at once (`SIGKILL`; `TerminateProcess` on Windows).
