---
slug: "io/net/tcp/set_nodelay"
title: "set_nodelay"
description: "Turns TCP_NODELAY on or off for a TCP stream."
module: "io::net::tcp"
kind: "fn"
name: "set_nodelay"
signature: "fn set_nodelay(Stream s, bool enabled) -> Result<unit, IoError>"
import: "use io::net::tcp::{set_nodelay};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io/net/tcp.hy#L231"
order: 6
---

Turns `TCP_NODELAY` on or off for a TCP stream.

With `enabled == true` small writes are sent at once instead of being
held back to be combined (Nagle's algorithm). Works on streams that a
package such as coil-tls has attached to, since they share the socket.
Returns `Err(IoError::InvalidInput)` for a listener or a stream that is
not TCP.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `enabled` | `bool` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{IoError};
use io::net::tcp::{connect, listen, local_addr, set_nodelay};
use tests::assert;
fn run() -> Result<unit, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    set_nodelay(client, true)?;
    return ();
}

fn main() {
    let ok = match run() {
        Result::Ok(_) => true,
        Result::Err(_) => false,
    };
    assert!(ok);
}
```

## See also

- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on listener without waiting.
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to host on port.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to host on port, giving up after ms milliseconds.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on host and port.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local (host, port) of a TCP listener or connected TCP stream.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote (host, port) of a connected TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
