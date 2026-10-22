---
slug: "io/await_readable"
title: "await_readable"
description: "Older name of wait_readable; behaves exactly the same."
module: "io"
kind: "fn"
name: "await_readable"
signature: "fn await_readable(Stream s) -> Result<unit, IoError>"
import: "use io::{await_readable};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L542"
order: 14
---

Older name of [`wait_readable`](/docs/reference/io/wait_readable); behaves exactly the same.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{await_readable, read, IoError};
use io::net::tcp::{connect, listen, local_addr};
use io::sync::{accept_wait, write_all};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<Option<int>, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let server = accept_wait(listener)?;
    write_all(client, to_bytes("x"))?;
    await_readable(server)?;
    return read(server, to_bytes("...."))?;
}

fn main() {
    let n = match run() {
        Result::Ok(Option::Some(n)) => n,
        default => 0,
    };
    assert!(n == 1);
}
```

## See also

- [`io::wait_readable`](/docs/reference/io/wait_readable)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
