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
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/io.hy#L551"
order: 15
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
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
