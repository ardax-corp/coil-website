---
slug: "process/Child/stdin"
title: "Child::stdin"
description: "The write end of the child's standard input, when the command set it to Stdio::Pipe; None otherwise and after the first call. Close it (io::close) to send end of input."
module: "process"
kind: "method"
name: "stdin"
parent: "Child"
signature: "pub fn stdin() -> Option<Stream>"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/process.hy#L285"
order: 1
---

The write end of the child's standard input, when the command set it to [`Stdio::Pipe`](/docs/reference/process/Stdio#variant-pipe); `None` otherwise and after the first call. Close it ([`io::close`](/docs/reference/io/close)) to send end of input.

Called on a `Child` value as `value.stdin(…)`.

## Returns

`Option<Stream>`

## See also

- [`process::Stdio`](/docs/reference/process/Stdio)
- [`io::close`](/docs/reference/io/close)
- [`Child`](/docs/reference/process/Child): A started child process.
- [`Child::pid`](/docs/reference/process/Child/pid): The child's OS process id.
- [`Child::stdout`](/docs/reference/process/Child/stdout): The read end of the child's standard output, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::stderr`](/docs/reference/process/Child/stderr): The read end of the child's standard error, when the command set it to `Stdio::Pipe`; `None` otherwise and after the first call.
- [`Child::wait`](/docs/reference/process/Child/wait): Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it).
- [`Child::try_wait`](/docs/reference/process/Child/try_wait): The exit code if the child has ended, `None` if it is still running.
