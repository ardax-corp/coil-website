---
slug: "io/net/tcp/peer_addr"
title: "peer_addr"
description: "Returns the remote (host, port) of a connected TCP stream."
module: "io::net::tcp"
kind: "fn"
name: "peer_addr"
signature: "fn peer_addr(Stream s) -> Result<(string, int), IoError>"
import: "use io::net::tcp::{peer_addr};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/io/net/tcp.hy#L199"
order: 5
---

Returns the remote `(host, port)` of a connected TCP stream.

The host is an IP address; IPv6 addresses come in brackets
(`"[::1]"`). Returns `Err(IoError::InvalidInput)` for a listener or a
stream that is not TCP.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<(string, int), IoError>`

## Examples

```coil
use io::{IoError};
use io::net::tcp::{connect, listen, local_addr, peer_addr};
use tests::assert;
fn run() -> Result<(string, int), IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    return peer_addr(client)?;
}

fn main() {
    let (host, _) = match run() {
        Result::Ok(addr) => addr,
        Result::Err(_) => ("", 0),
    };
    assert!(host == "127.0.0.1");
}
```

## See also

- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on `listener` without waiting.
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to `host` on `port`.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on `host` and `port`.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local `(host, port)` of a TCP listener or connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
