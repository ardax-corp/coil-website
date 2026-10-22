---
slug: "io/net/udp/local_port"
title: "local_port"
description: "Returns the local port a UDP socket is bound to."
module: "io::net::udp"
kind: "fn"
name: "local_port"
signature: "fn local_port(Stream s) -> Result<int, IoError>"
import: "use io::net::udp::{local_port};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/io/net/udp.hy#L90"
order: 2
---

Returns the local port a UDP socket is bound to.

Useful after `bind(host, 0)` or [`connect`](/docs/reference/io/net/udp/connect) to learn the port the OS
picked. Returns `Err(IoError::AlreadyClosed)` when `s` is not an open
UDP socket.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::net::udp::{bind, local_port};
use tests::assert;
let sock = match bind("127.0.0.1", 0) {
    Result::Ok(s) => s,
    Result::Err(_) => panic "bind failed",
};
let port = match local_port(sock) {
    Result::Ok(p) => p,
    Result::Err(_) => 0,
};
assert!(port > 0 && port <= 65535);
```

## See also

- [`io::net::udp::connect`](/docs/reference/io/net/udp/connect)
- [`bind`](/docs/reference/io/net/udp/bind): Opens a UDP socket bound to host and port.
- [`recv_from`](/docs/reference/io/net/udp/recv_from): Receives one datagram into the front of buf without waiting.
- [`send_to`](/docs/reference/io/net/udp/send_to): Sends buf as one datagram to host on port and returns how many bytes were sent.
