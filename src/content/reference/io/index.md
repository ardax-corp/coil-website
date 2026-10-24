---
slug: "io/index"
title: "io"
description: "Files, standard streams, TCP and UDP as non-blocking streams of bytes."
module: "io"
kind: "module"
name: "io"
origin: "builtin"
auto: false
order: 3
---

Everything in `io` is a [`Stream`](/docs/reference/io/Stream): a handle to a file, a standard stream or a
socket. The functions here are the low-level, non-blocking layer. [`read`](/docs/reference/io/fn.read) and
[`write`](/docs/reference/io/fn.write) move as many bytes as are ready and never spin; buffers are
[`Vec<byte>`](/docs/reference/prelude/Vec). Errors are [`IoError`](/docs/reference/io/IoError) values in a [`Result`](/docs/reference/prelude/Result).

Most programs use the blocking helpers on top of this layer from coil-stdlib:
[`io::sync`](/docs/reference/io/sync) (`println`, `write_all`,
`read_to_end`, `read_line`) and [`io::file`](/docs/reference/io/file)
(`read_text`, `write_text`):

```coil
use io::sync::{println};
use io::file::{read_text};

fn main() {
    let text = read_text("notes.txt")?;
    println(text)?;
}
```

To do several IO operations at once, run them as tasks: inside a
[`task::scope`](/docs/manual/tutorial/13-tasks) a task that waits for IO lets
the others run. Text conversion is in [`string`](/docs/reference/string)
(`to_bytes`, `from_bytes`). File and network access needs a grant when the
program runs (`--allow-read`, `--allow-write`, `--allow-net`); see
[Permissions](/docs/language/permissions). TLS is the
[coil-tls](/packages/tls) package.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::{Stream, IoError};
```

## Modules

| Module | Description |
|--------|-------------|
| [`io::fs`](/docs/reference/io/fs) | Paths and the file system: metadata, directories, rename, copy, symlinks. |
| [`io::tty`](/docs/reference/io/tty) | Terminals: is a stream a terminal, its size, raw mode, a key read with a timeout, resize notices. |
| [`io::file`](/docs/reference/io/file) | Read and write whole files in one call. |
| [`io::sync`](/docs/reference/io/sync) | Blocking IO helpers: println, read_line, write_all, read_to_end. |
| [`io::net`](/docs/reference/io/net) | TCP and UDP sockets. |

## Types

| Name | Description |
|------|-------------|
| [`Stream`](/docs/reference/io/Stream) | An open file, socket or standard stream. |
| [`IoError`](/docs/reference/io/IoError) | The error type of every `io`, [`io::fs`](/docs/reference/io/fs) and [`io::net`](/docs/reference/io/net) operation. |

## Traits

| Name | Description |
|------|-------------|
| [`Read`](/docs/reference/io/Read) | Types that bytes can be read from; implemented for [`Stream`](/docs/reference/io/Stream). |
| [`Write`](/docs/reference/io/Write) | Types that bytes can be written to; implemented for [`Stream`](/docs/reference/io/Stream). |

## Functions

| Name | Description |
|------|-------------|
| [`stdin`](/docs/reference/io/stdin) | Returns a new stream on the process's standard input. |
| [`stdout`](/docs/reference/io/stdout) | Returns a new stream on the process's standard output. |
| [`stderr`](/docs/reference/io/stderr) | Returns a new stream on the process's standard error. |
| [`capture_begin`](/docs/reference/io/capture_begin) | Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching [`capture_end()`](/docs/reference/io/capture_end). |
| [`capture_end`](/docs/reference/io/capture_end) | Ends the innermost [`capture_begin()`](/docs/reference/io/capture_begin) and returns what it kept, as `(stdout, stderr)`. |
| [`open`](/docs/reference/io/open) | Opens the file at `path` with `mode` and returns a stream on it. |
| [`close`](/docs/reference/io/close) | Closes `s`. |
| [`read`](/docs/reference/io/fn.read) | Reads bytes from `s` into the front of `buf` without waiting. |
| [`write`](/docs/reference/io/fn.write) | Writes bytes from `buf` to `s` without waiting and returns how many were written. |
| [`write_from`](/docs/reference/io/write_from) | Writes `buf[offset..]` to `s` without waiting and returns how many bytes were written. |
| [`wait_readable`](/docs/reference/io/wait_readable) | Waits until `s` is readable. |
| [`wait_writable`](/docs/reference/io/wait_writable) | Waits until `s` is writable. |
| [`await_readable`](/docs/reference/io/await_readable) | Older name of [`wait_readable`](/docs/reference/io/wait_readable); behaves exactly the same. |
| [`await_writable`](/docs/reference/io/await_writable) | Older name of [`wait_writable`](/docs/reference/io/wait_writable); behaves exactly the same. |
| [`drive`](/docs/reference/io/drive) | Deprecated: polls the registered IO waiters once and returns how many became ready. |
| [`wait_ready`](/docs/reference/io/wait_ready) | Deprecated: waits until any registered IO waiter is ready and returns how many became ready. |
| [`result_unit_probe`](/docs/reference/io/result_unit_probe) | Returns `Ok(())` when `n >= 0` and `Err(IoError::InvalidInput)` otherwise. |
| [`attach`](/docs/reference/io/attach) | Installs package IO hooks on `s` in place; the free-function form of [`Stream.attach`](/docs/reference/io/Stream/attach). |
| [`park`](/docs/reference/io/park) | Waits until the descriptor of `s` is ready; the free-function form of [`Stream.park`](/docs/reference/io/Stream/park). |
