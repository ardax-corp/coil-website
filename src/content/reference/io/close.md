---
slug: "io/close"
title: "close"
description: "Closes s."
module: "io"
kind: "fn"
name: "close"
signature: "fn close(Stream s) -> Result<unit, IoError>"
import: "use io::{close};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L365"
order: 8
---

Closes `s`.

Closing an attached stream calls its package `shutdown` and `free`
hooks first, and wakes any task waiting on it. Closing twice returns
`Err(IoError::AlreadyClosed)`. A stream that is never closed is closed
when the garbage collector drops it.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{close, stdout, IoError};
use tests::assert;
let s = stdout();
let first = match close(s) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let second = match close(s) {
    Result::Err(IoError::AlreadyClosed) => true,
    default => false,
};
assert!(first && second);
```

## See also

- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
- [`write_from`](/docs/reference/io/write_from): Writes buf[offset..] to s without waiting and returns how many bytes were written.
- [`wait_readable`](/docs/reference/io/wait_readable): Waits until s is readable.
