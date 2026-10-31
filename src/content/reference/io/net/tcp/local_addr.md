---
slug: "io/net/tcp/local_addr"
title: "local_addr"
description: "Returns the local (host, port) of a TCP listener or connected TCP stream."
module: "io::net::tcp"
kind: "fn"
name: "local_addr"
signature: "fn local_addr(Stream s) -> Result<(string, int), IoError>"
import: "use io::net::tcp::{local_addr};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io/net/tcp.coil#L170"
order: 4
---

Returns the local `(host, port)` of a TCP listener or connected TCP stream.

The host is an IP address; IPv6 addresses come in brackets
(`"[::1]"`). Useful after `listen(host, 0)` to learn the port the OS
picked. Returns `Err(IoError::InvalidInput)` for a stream that is not
TCP and `Err(IoError::AlreadyClosed)` once it is closed.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<(string, int), IoError>`

## Examples

```coil
use io::net::tcp::{listen, local_addr};
use tests::assert;
let listener = match listen("127.0.0.1", 0) {
    Result::Ok(s) => s,
    Result::Err(_) => panic "listen failed",
};
let (host, port) = match local_addr(listener) {
    Result::Ok(addr) => addr,
    Result::Err(_) => ("", 0),
};
assert!(host == "127.0.0.1" && port > 0);
```

## See also

- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on `listener` without waiting.
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to `host` on `port`.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on `host` and `port`.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote `(host, port)` of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
