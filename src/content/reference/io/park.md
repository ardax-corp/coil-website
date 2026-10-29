---
slug: "io/park"
title: "park"
description: "Waits until the descriptor of s is ready; the free-function form of Stream.park."
module: "io"
kind: "fn"
name: "park"
signature: "fn park(Stream s) -> Result<unit, IoError>"
import: "use io::{park};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io.hy#L699"
order: 22
---

Waits until the descriptor of `s` is ready; the free-function form of [`Stream.park`](/docs/reference/io/Stream/park).

Waits for readability, or for writability when an attached package's
last write stopped with `WouldBlock`. Inside a task only that task waits.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{park, read, IoError};
use io::net::tcp::{connect, listen, local_addr};
use io::sync::{accept_wait, write_all};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<Option<int>, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let server = accept_wait(listener)?;
    write_all(client, to_bytes("hi"))?;
    park(server)?;
    return read(server, to_bytes("....."))?;
}

fn main() {
    let n = match run() {
        Result::Ok(Option::Some(n)) => n,
        default => 0,
    };
    assert!(n == 2);
}
```

## See also

- [`Stream::park`](/docs/reference/io/Stream/park)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
