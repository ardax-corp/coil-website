---
slug: "io/wait_readable"
title: "wait_readable"
description: "Waits until s is readable."
module: "io"
kind: "fn"
name: "wait_readable"
signature: "fn wait_readable(Stream s) -> Result<unit, IoError>"
import: "use io::{wait_readable};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/io.hy#L528"
order: 14
---

Waits until `s` is readable.

Returns at once when data (or end of file) is already available.
Inside a task only that task waits while the others run; elsewhere the
program waits. Returns `Err(IoError::TimedOut)` when the stream's read
timeout passes and `Err(IoError::AlreadyClosed)` on a closed stream.
[`await_readable`](/docs/reference/io/await_readable) is an older name for the same function.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{read, wait_readable, IoError};
use io::net::tcp::{connect, listen, local_addr};
use io::sync::{accept_wait, write_all};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<Option<int>, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let server = accept_wait(listener)?;
    write_all(client, to_bytes("ping"))?;
    wait_readable(server)?;
    return read(server, to_bytes("........"))?;
}

fn main() {
    let n = match run() {
        Result::Ok(Option::Some(n)) => n,
        default => 0,
    };
    assert!(n == 4);
}
```

## See also

- [`io::await_readable`](/docs/reference/io/await_readable)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
