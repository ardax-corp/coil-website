---
slug: "io/fn.write"
title: "write"
description: "Writes bytes from buf to s without waiting and returns how many were written."
module: "io"
kind: "fn"
name: "write"
signature: "fn write(Stream s, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::{write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/io.hy#L470"
order: 12
---

Writes bytes from `buf` to `s` without waiting and returns how many were written.

The count may be less than `buf.len()` when the OS accepts only part of
it, and `Err(IoError::WouldBlock)` means nothing could be written yet;
call `wait_writable(s)` and retry. [`io::sync::write_all`](/docs/reference/io/sync/write_all) loops until
everything is written. Writing to a closed stream returns
`Err(IoError::AlreadyClosed)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::{stdout, write};
use string::{to_bytes};
use tests::assert;
let n = match write(stdout(), to_bytes("hi\n")) {
    Result::Ok(n) => n,
    Result::Err(_) => 0,
};
assert!(n == 3);
```

## See also

- [`io::sync::write_all`](/docs/reference/io/sync/write_all)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
