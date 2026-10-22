---
slug: "io/net/udp/send_to"
title: "send_to"
description: "Sends buf as one datagram to host on port and returns how many bytes were sent."
module: "io::net::udp"
kind: "fn"
name: "send_to"
signature: "fn send_to(Stream s, Vec<byte> buf, string host, int port) -> Result<int, IoError>"
import: "use io::net::udp::{send_to};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io/net/udp.hy#L158"
order: 4
---

Sends `buf` as one datagram to `host` on `port` and returns how many bytes were sent.

Does not wait: returns `Err(IoError::WouldBlock)` when the OS send
buffer is full ([`io::sync::send_to_wait`](/docs/reference/io/sync/send_to_wait) waits and retries). `host` is
resolved like in [`bind`](/docs/reference/io/net/udp/bind). Returns `Err(IoError::InvalidInput)` for a port
outside `0..=65535`.
A program that reaches `send_to` compiles only with `--allow-net`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::{IoError};
use io::net::udp::{bind, local_port, send_to};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<int, IoError> {
    let server = bind("127.0.0.1", 0)?;
    let port = local_port(server)?;
    let client = bind("127.0.0.1", 0)?;
    return send_to(client, to_bytes("hello"), "127.0.0.1", port)?;
}

fn main() {
    let sent = match run() {
        Result::Ok(n) => n,
        Result::Err(_) => 0,
    };
    assert!(sent == 5);
}
```

## See also

- [`io::sync::send_to_wait`](/docs/reference/io/sync/send_to_wait)
- [`io::net::udp::bind`](/docs/reference/io/net/udp/bind)
- [`connect`](/docs/reference/io/net/udp/connect): Opens a UDP socket whose default peer is host on port.
- [`local_port`](/docs/reference/io/net/udp/local_port): Returns the local port a UDP socket is bound to.
- [`recv_from`](/docs/reference/io/net/udp/recv_from): Receives one datagram into the front of buf without waiting.
