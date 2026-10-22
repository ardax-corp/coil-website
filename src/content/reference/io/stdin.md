---
slug: "io/stdin"
title: "stdin"
description: "Returns a new stream on the process's standard input."
module: "io"
kind: "fn"
name: "stdin"
signature: "fn stdin() -> Stream"
import: "use io::{stdin};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L254"
order: 4
---

Returns a new stream on the process's standard input.

The stream holds a duplicated descriptor, so closing it does not close
the process's stdin. Like every stream it is non-blocking: [`read`](/docs/reference/io/fn.read)
returns `Err(IoError::WouldBlock)` until input is available. Use
[`io::sync::read_line`](/docs/reference/io/sync/read_line) or `read_to_end` to wait for input.

## Returns

`Stream`

## Examples

```coil
use io::{close, stdin};
use tests::assert;
let s = stdin();
let closed = match close(s) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
assert!(closed);
```

## See also

- [`io::read`](/docs/reference/io/fn.read)
- [`io::sync::read_line`](/docs/reference/io/sync/read_line)
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
- [`write_from`](/docs/reference/io/write_from): Writes buf[offset..] to s without waiting and returns how many bytes were written.
