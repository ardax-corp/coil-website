---
slug: "io/Stream/park"
title: "Stream::park"
description: "Waits until this stream's descriptor is ready."
module: "io"
kind: "method"
name: "park"
parent: "Stream"
signature: "pub fn park() -> Result<unit, IoError>"
import: "use io::{Stream};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io.hy#L108"
order: 1
---

Waits until this stream's descriptor is ready.

Waits for readability, or for writability when an attached package's
last write stopped with `WouldBlock` (for example a TLS handshake that
still has data to flush). Inside a task only that task waits. Meant
for packages built on [`attach`](/docs/reference/io/Stream/attach); plain code uses [`wait_readable`](/docs/reference/io/wait_readable) /
[`wait_writable`](/docs/reference/io/wait_writable). Returns `Err(IoError::AlreadyClosed)` on a closed
stream and `Err(IoError::TimedOut)` when the stream's timeout passes.

Called on a `Stream` value as `value.park(…)`.

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{read, IoError};
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
    server.park()?;
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

- [`Stream::attach`](/docs/reference/io/Stream/attach)
- [`io::wait_readable`](/docs/reference/io/wait_readable)
- [`io::wait_writable`](/docs/reference/io/wait_writable)
- [`Stream`](/docs/reference/io/Stream): An open file, socket or standard stream.
- [`Stream::fd`](/docs/reference/io/Stream/fd): Returns the OS file descriptor (socket handle on Windows) of this stream.
