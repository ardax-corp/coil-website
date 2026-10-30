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
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/io.hy#L594"
order: 17
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
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
