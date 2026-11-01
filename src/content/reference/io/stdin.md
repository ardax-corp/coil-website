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
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io.coil#L254"
order: 4
---

Returns a new stream on the process's standard input.

The stream holds a duplicated descriptor, so closing it does not close
the process's stdin. Like every stream it is non-blocking: [`read`](/docs/reference/io/fn.read)
returns `Err(IoError::WouldBlock)` until input is available. Use
[`io::sync::read_line`](/packages/stdlib/reference/io/sync/read_line) or `read_to_end` to wait for input.

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
- [`io::sync::read_line`](/packages/stdlib/reference/io/sync/read_line)
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
