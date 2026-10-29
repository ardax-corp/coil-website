---
slug: "io/write_from"
title: "write_from"
description: "Writes buf[offset..] to s without waiting and returns how many bytes were written."
module: "io"
kind: "fn"
name: "write_from"
signature: "fn write_from(Stream s, Vec<byte> buf, int offset) -> Result<int, IoError>"
import: "use io::{write_from};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io.hy#L492"
order: 13
---

Writes `buf[offset..]` to `s` without waiting and returns how many bytes were written.

Like [`write`](/docs/reference/io/fn.write), but starts at `offset` without copying the rest of the
buffer, which suits a loop that resumes after a partial write.
`offset == buf.len()` writes nothing and returns `Ok(0)`; a negative
offset or one past the end returns `Err(IoError::InvalidInput)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |
| `offset` | `int` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::{stdout, write_from};
use string::{to_bytes};
use tests::assert;
let buf = to_bytes("skip: shown\n");
let n = match write_from(stdout(), buf, 6) {
    Result::Ok(n) => n,
    Result::Err(_) => 0,
};
assert!(n == 6);
```

## See also

- [`io::write`](/docs/reference/io/fn.write)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
