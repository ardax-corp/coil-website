---
slug: "io/net/tcp/accept"
title: "accept"
description: "Accepts one pending connection on listener without waiting."
module: "io::net::tcp"
kind: "fn"
name: "accept"
signature: "fn accept(Stream listener) -> Result<Stream, IoError>"
import: "use io::net::tcp::{accept};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/io/net/tcp.hy#L38"
order: 0
---

Accepts one pending connection on `listener` without waiting.

Returns the connected stream, or `Err(IoError::WouldBlock)` when no
connection is waiting; then call `wait_readable(listener)` and retry,
or use [`io::sync::accept_wait`](/docs/reference/io/sync/accept_wait), which does both. Returns
`Err(IoError::InvalidInput)` when `listener` is not a stream from
[`listen`](/docs/reference/io/net/tcp/listen). Needs no permission flag (the grant is checked at [`listen`](/docs/reference/io/net/tcp/listen)).

## Parameters

| Name | Type |
|------|------|
| `listener` | `Stream` |

## Returns

`Result<Stream, IoError>`

## Examples

```coil
use io::{wait_readable, IoError};
use io::net::tcp::{accept, connect, listen, local_addr};
use tests::assert;
fn run() -> Result<bool, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let empty = match accept(listener) {
        Result::Err(IoError::WouldBlock) => true,
        default => false,
    };
    let (_, port) = local_addr(listener)?;
    let _client = connect("127.0.0.1", port)?;
    wait_readable(listener)?;
    let _server = accept(listener)?;
    return empty;
}

fn main() {
    let ok = match run() {
        Result::Ok(b) => b,
        Result::Err(_) => false,
    };
    assert!(ok);
}
```

## See also

- [`io::sync::accept_wait`](/docs/reference/io/sync/accept_wait)
- [`io::net::tcp::listen`](/docs/reference/io/net/tcp/listen)
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to `host` on `port`.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local `(host, port)` of a TCP listener or connected TCP stream.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote `(host, port)` of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
