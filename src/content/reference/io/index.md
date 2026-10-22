---
slug: "io/index"
title: "io"
description: "The io module."
module: "io"
kind: "module"
name: "io"
origin: "builtin"
auto: false
order: 3
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use io::{Stream, IoError};
```

## Modules

| Module | Description |
|--------|-------------|
| [`io::fs`](/docs/reference/io/fs) |  |
| [`io::file`](/docs/reference/io/file) |  |
| [`io::sync`](/docs/reference/io/sync) |  |
| [`io::net`](/docs/reference/io/net) |  |

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
| [`open`](/docs/reference/io/open) | Opens the file at [`path`](/docs/reference/path) with `mode` and returns a stream on it. |
| [`close`](/docs/reference/io/close) | Closes `s`. |
| [`read`](/docs/reference/io/read) | Reads bytes from `s` into the front of `buf` without waiting. |
| [`write`](/docs/reference/io/write) | Writes bytes from `buf` to `s` without waiting and returns how many were written. |
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
