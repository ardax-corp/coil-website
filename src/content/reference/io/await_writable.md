---
slug: "io/await_writable"
title: "await_writable"
description: "Older name of wait_writable; behaves exactly the same."
module: "io"
kind: "fn"
name: "await_writable"
signature: "fn await_writable(Stream s) -> Result<unit, IoError>"
import: "use io::{await_writable};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L557"
order: 15
---

Older name of [`wait_writable`](/docs/reference/io/wait_writable); behaves exactly the same.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{await_writable, stdout};
use tests::assert;
let ready = match await_writable(stdout()) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
assert!(ready);
```

## See also

- [`io::wait_writable`](/docs/reference/io/wait_writable)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
