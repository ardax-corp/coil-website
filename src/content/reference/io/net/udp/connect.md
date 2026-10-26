---
slug: "io/net/udp/connect"
title: "connect"
description: "Opens a UDP socket whose default peer is host on port."
module: "io::net::udp"
kind: "fn"
name: "connect"
signature: "fn connect(string host, int port) -> Result<Stream, IoError>"
import: "use io::net::udp::{connect};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/io/net/udp.hy#L67"
order: 1
---

Opens a UDP socket whose default peer is `host` on `port`.

The socket is bound to an ephemeral IPv4 port (`0.0.0.0:0`), so the
peer must be an IPv4 address. Afterwards [`io::write`](/docs/reference/io/fn.write) sends a datagram
to that peer and [`io::read`](/docs/reference/io/fn.read) receives one from it. Nothing is sent by
`connect` itself.
A program that reaches `connect` compiles only with `--allow-net`.

## Parameters

| Name | Type |
|------|------|
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<Stream, IoError>`

## Examples

```coil
use io::{write, IoError};
use io::net::udp::{bind, connect, local_port};
use io::sync::{recv_from_wait};
use string::{to_bytes};
use tests::assert;
fn run() -> Result<int, IoError> {
    let server = bind("127.0.0.1", 0)?;
    let port = local_port(server)?;
    let client = connect("127.0.0.1", port)?;
    write(client, to_bytes("ping"))?;
    let (n, _, _) = recv_from_wait(server, to_bytes("........"))?;
    return n;
}

fn main() {
    let n = match run() {
        Result::Ok(n) => n,
        Result::Err(_) => 0,
    };
    assert!(n == 4);
}
```

## See also

- [`io::write`](/docs/reference/io/fn.write)
- [`io::read`](/docs/reference/io/fn.read)
- [`bind`](/docs/reference/io/net/udp/bind): Opens a UDP socket bound to `host` and `port`.
- [`local_port`](/docs/reference/io/net/udp/local_port): Returns the local port a UDP socket is bound to.
- [`recv_from`](/docs/reference/io/net/udp/recv_from): Receives one datagram into the front of `buf` without waiting.
- [`send_to`](/docs/reference/io/net/udp/send_to): Sends `buf` as one datagram to `host` on `port` and returns how many bytes were sent.
