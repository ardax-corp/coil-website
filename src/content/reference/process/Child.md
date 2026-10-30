---
slug: "process/Child"
title: "Child"
description: "A started child process."
module: "process"
kind: "class"
name: "Child"
signature: "class Child"
import: "use process::{Child};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/process.hy#L66"
order: 3
---

A started child process.

Dropping a `Child` does not stop the process; call [`kill`](/docs/reference/process/Child/kill) or [`wait`](/docs/reference/process/Child/wait).

## Methods

| Name | Description |
|------|-------------|
| [`pid`](/docs/reference/process/Child/pid) | The child's OS process id. |
| [`stdin`](/docs/reference/process/Child/stdin) | The write end of the child's standard input, when the command set it to [`Stdio::Pipe`](/docs/reference/process/Stdio#variant-pipe); `None` otherwise and after the first call. |
| [`stdout`](/docs/reference/process/Child/stdout) | The read end of the child's standard output, when the command set it to [`Stdio::Pipe`](/docs/reference/process/Stdio#variant-pipe); `None` otherwise and after the first call. |
| [`stderr`](/docs/reference/process/Child/stderr) | The read end of the child's standard error, when the command set it to [`Stdio::Pipe`](/docs/reference/process/Stdio#variant-pipe); `None` otherwise and after the first call. |
| [`wait`](/docs/reference/process/Child/wait) | Waits for the child to end and returns its exit code (`128 + signal` on POSIX when a signal ended it). |
| [`try_wait`](/docs/reference/process/Child/try_wait) | The exit code if the child has ended, `None` if it is still running. |
| [`output`](/docs/reference/process/Child/output) | Reads the output and error pipes not yet taken to the end, then waits. |
| [`kill`](/docs/reference/process/Child/kill) | Ends the child at once (`SIGKILL`; `TerminateProcess` on Windows). |
| [`signal`](/docs/reference/process/Child/signal) | Sends POSIX signal `sig` (15 is `SIGTERM`, 2 `SIGINT`) to the child. |

## See also

- [`Child::kill`](/docs/reference/process/Child/kill)
- [`Child::wait`](/docs/reference/process/Child/wait)
- [`Command`](/docs/reference/process/Command): A program to run: its arguments, environment, working directory and standard streams.
- [`Output`](/docs/reference/process/Output): What `output` collected: the exit code and everything the child wrote.
