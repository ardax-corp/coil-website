---
slug: "io/net/tcp/connect"
title: "connect"
description: "Opens a TCP connection to host on port."
module: "io::net::tcp"
kind: "fn"
name: "connect"
signature: "fn connect(string host, int port) -> Result<Stream, IoError>"
import: "use io::net::tcp::{connect};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/io/net/tcp.hy#L76"
order: 1
---

Opens a TCP connection to `host` on `port`.

`host` is an IP address (IPv6 may be written in brackets, `"[::1]"`) or
a name to resolve; every resolved address is tried in order. Waits
until the connection is made or fails; inside a task only that task
waits. Same as `connect_timeout(host, port, 0)`. The returned stream
is non-blocking like every `Stream`.

Returns `Err(IoError::InvalidInput)` for a port outside `0..=65535`,
`Err(IoError::NotFound)` when the name does not resolve, and
`Err(IoError::Other)` for errors such as a refused connection.
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
use io::{close, IoError};
use io::net::tcp::{connect, listen, local_addr, peer_addr};
use tests::assert;
fn run() -> Result<int, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let (_, peer_port) = peer_addr(client)?;
    close(client)?;
    return peer_port - port;
}

fn main() {
    let diff = match run() {
        Result::Ok(d) => d,
        Result::Err(_) => -1,
    };
    assert!(diff == 0);
}
```

## See also

- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on `listener` without waiting.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on `host` and `port`.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local `(host, port)` of a TCP listener or connected TCP stream.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote `(host, port)` of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
