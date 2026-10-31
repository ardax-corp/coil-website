---
slug: "io/capture_end"
title: "capture_end"
description: "Ends the innermost capture_begin() and returns what it kept, as (stdout, stderr). Both are empty when no capture is open."
module: "io"
kind: "fn"
name: "capture_end"
signature: "fn capture_end() -> (string, string)"
import: "use io::{capture_end};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io.hy#L326"
order: 8
---

Ends the innermost [`capture_begin()`](/docs/reference/io/capture_begin) and returns what it kept, as `(stdout, stderr)`. Both are empty when no capture is open.

## Returns

`(string, string)`

## Examples

```coil
use io::{capture_begin, capture_end, stderr, write};
use string::{to_bytes};
use tests::assert;
capture_begin();
let _ = write(stderr(), to_bytes("oops"));
let (_, err) = capture_end();
assert!(err == "oops");
```

## See also

- [`io::capture_begin`](/docs/reference/io/capture_begin)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
- [`read`](/docs/reference/io/fn.read): Reads bytes from `s` into the front of `buf` without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from `buf` to `s` without waiting and returns how many were written.
