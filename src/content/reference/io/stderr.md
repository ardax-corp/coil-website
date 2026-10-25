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
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/io.hy#L291"
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
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
- [`read`](/docs/reference/io/fn.read): Reads bytes from `s` into the front of `buf` without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from `buf` to `s` without waiting and returns how many were written.
