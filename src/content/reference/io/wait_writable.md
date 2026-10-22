---
slug: "io/wait_writable"
title: "wait_writable"
description: "Waits until s is writable."
module: "io"
kind: "fn"
name: "wait_writable"
signature: "fn wait_writable(Stream s) -> Result<unit, IoError>"
import: "use io::{wait_writable};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L512"
order: 13
---

Waits until `s` is writable.

Returns at once when the stream can take more data. Inside a task only
that task waits while the others run; elsewhere the program waits.
Returns `Err(IoError::TimedOut)` when the stream's write timeout passes
and `Err(IoError::AlreadyClosed)` on a closed stream.
[`await_writable`](/docs/reference/io/await_writable) is an older name for the same function.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{stdout, wait_writable};
use tests::assert;
let ready = match wait_writable(stdout()) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
assert!(ready);
```

## See also

- [`io::await_writable`](/docs/reference/io/await_writable)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
