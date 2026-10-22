---
slug: "io/net/udp/recv_from"
title: "recv_from"
description: "Receives one datagram into the front of buf without waiting."
module: "io::net::udp"
kind: "fn"
name: "recv_from"
signature: "fn recv_from(Stream s, Vec<byte> buf) -> Result<(int, string, int), IoError>"
import: "use io::net::udp::{recv_from};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io/net/udp.hy#L126"
order: 3
---

Receives one datagram into the front of `buf` without waiting.

Returns `(n, host, port)`: the number of bytes written to `buf[0..n]`
and the sender's IP address (IPv6 without brackets) and port. A
datagram longer than `buf.len()` is cut to fit; the rest is lost.
Returns `Err(IoError::WouldBlock)` when no datagram is waiting; then
call `wait_readable(s)` and retry, or use [`io::sync::recv_from_wait`](/docs/reference/io/sync/recv_from_wait).
An empty `buf` returns `(0, "", 0)` at once.
Needs no permission flag (the grant is checked at [`bind`](/docs/reference/io/net/udp/bind)).

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<(int, string, int), IoError>`

## Examples

```coil
use io::{wait_readable, IoError};
use io::net::udp::{bind, local_port, recv_from, send_to};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<(int, string, int), IoError> {
    let server = bind("127.0.0.1", 0)?;
    let port = local_port(server)?;
    let client = bind("127.0.0.1", 0)?;
    send_to(client, to_bytes("hi"), "127.0.0.1", port)?;
    wait_readable(server)?;
    return recv_from(server, to_bytes("........"))?;
}

fn main() {
    let (n, host, port) = match run() {
        Result::Ok(t) => t,
        Result::Err(_) => (0, "", 0),
    };
    assert!(n == 2 && host == "127.0.0.1" && port > 0);
}
```

## See also

- [`io::sync::recv_from_wait`](/docs/reference/io/sync/recv_from_wait)
- [`io::net::udp::bind`](/docs/reference/io/net/udp/bind)
- [`connect`](/docs/reference/io/net/udp/connect): Opens a UDP socket whose default peer is host on port.
- [`local_port`](/docs/reference/io/net/udp/local_port): Returns the local port a UDP socket is bound to.
- [`send_to`](/docs/reference/io/net/udp/send_to): Sends buf as one datagram to host on port and returns how many bytes were sent.
