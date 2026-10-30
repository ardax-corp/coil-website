---
slug: "process/Child/stderr"
title: "Child::stderr"
description: "The read end of the child's standard error, when the command set it to Stdio::Pipe; None otherwise and after the first call."
module: "process"
kind: "method"
name: "stderr"
parent: "Child"
signature: "pub fn stderr() -> Option<Stream>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/process.hy#L297"
order: 3
---

The read end of the child's standard error, when the command set it to [`Stdio::Pipe`](/docs/reference/process/Stdio#variant-pipe); `None` otherwise and after the first call.

Called on a `Child` value as `value.stderr(…)`.

## Returns

`Option<Stream>`

## See also

- [`process::Stdio`](/docs/reference/process/Stdio)
- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdin`](/docs/reference/process/Child/stdin): The write end of the child's standard input, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
- [`Child::output`](/docs/reference/process/Child/output): Reads the output and error pipes not yet taken to the end, then waits.
