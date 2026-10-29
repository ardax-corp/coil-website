---
slug: "io/net/tcp/shutdown"
title: "shutdown"
description: "Shuts down the reading half, the writing half, or both halves of a TCP stream."
module: "io::net::tcp"
kind: "fn"
name: "shutdown"
signature: "fn shutdown(Stream s, int how) -> Result<unit, IoError>"
import: "use io::net::tcp::{shutdown};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/io/net/tcp.hy#L264"
order: 7
---

Shuts down the reading half, the writing half, or both halves of a TCP stream.

`how` is `0` for reading, `1` for writing and `2` for both. After
shutting down writing, the peer reads end of file. The stream stays
open until `close`. Any other `how` returns `Err(IoError::InvalidInput)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `how` | `int` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{IoError};
use io::net::tcp::{connect, listen, local_addr, shutdown};
use io::sync::{accept_wait, read_to_end};
use tests::assert;
fn run() -> Result<int, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let server = accept_wait(listener)?;
    shutdown(client, 1)?;
    let rest = read_to_end(server)?;
    return rest.len();
}

fn main() {
    let n = match run() {
        Result::Ok(n) => n,
        Result::Err(_) => -1,
    };
    assert!(n == 0);
}
```

## See also

- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on `listener` without waiting.
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to `host` on `port`.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on `host` and `port`.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local `(host, port)` of a TCP listener or connected TCP stream.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote `(host, port)` of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
