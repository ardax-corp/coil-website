---
slug: "io/capture_begin"
title: "capture_begin"
description: "Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching capture_end()."
module: "io"
kind: "fn"
name: "capture_begin"
signature: "fn capture_begin()"
import: "use io::{capture_begin};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/io.hy#L310"
order: 7
---

Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching [`capture_end()`](/docs/reference/io/capture_end).

Captures nest: each [`capture_end()`](/docs/reference/io/capture_end) closes the innermost one. Use it in
tests to check what code prints. Threads spawned while capturing write
to their own output. A capture still open when a test case ends goes to
that case's output.

## Examples

```coil
use io::{capture_begin, capture_end, stdout, write};
use string::{to_bytes};
use tests::assert;
capture_begin();
let _ = write(stdout(), to_bytes("hi\n"));
let (out, err) = capture_end();
assert!(out == "hi\n" && err == "");
```

## See also

- [`io::capture_end`](/docs/reference/io/capture_end)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
- [`read`](/docs/reference/io/fn.read): Reads bytes from `s` into the front of `buf` without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from `buf` to `s` without waiting and returns how many were written.
