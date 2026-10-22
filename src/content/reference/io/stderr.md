---
slug: "io/stderr"
title: "stderr"
description: "Returns a new stream on the process's standard error."
module: "io"
kind: "fn"
name: "stderr"
signature: "fn stderr() -> Stream"
import: "use io::{stderr};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L289"
order: 6
---

Returns a new stream on the process's standard error.

The stream holds a duplicated descriptor, so closing it does not close
the process's stderr.

## Returns

`Stream`

## Examples

```coil
use io::{stderr, write};
use string::{to_bytes};
use tests::assert;
let n = match write(stderr(), to_bytes("")) {
    Result::Ok(n) => n,
    Result::Err(_) => -1,
};
assert!(n == 0);
```

## See also

- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
- [`write_from`](/docs/reference/io/write_from): Writes buf[offset..] to s without waiting and returns how many bytes were written.
- [`wait_readable`](/docs/reference/io/wait_readable): Waits until s is readable.
