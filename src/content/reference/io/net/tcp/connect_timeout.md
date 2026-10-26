---
slug: "io/net/tcp/connect_timeout"
title: "connect_timeout"
description: "Opens a TCP connection to host on port, giving up after ms milliseconds."
module: "io::net::tcp"
kind: "fn"
name: "connect_timeout"
signature: "fn connect_timeout(string host, int port, int ms) -> Result<Stream, IoError>"
import: "use io::net::tcp::{connect_timeout};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/io/net/tcp.hy#L106"
order: 2
---

Opens a TCP connection to `host` on `port`, giving up after `ms` milliseconds.

Like [`connect`](/docs/reference/io/net/tcp/connect), but name lookup and every address tried share one
deadline of `ms` milliseconds; when it passes the result is
`Err(IoError::TimedOut)`. `ms <= 0` waits forever.
Needs `--allow-net`.

## Parameters

| Name | Type |
|------|------|
| `host` | `string` |
| `port` | `int` |
| `ms` | `int` |

## Returns

`Result<Stream, IoError>`

## Examples

```coil
use io::{IoError};
use io::net::tcp::{connect_timeout, listen, local_addr};
use tests::assert;
fn run() -> Result<unit, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let _client = connect_timeout("127.0.0.1", port, 1000)?;
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

- [`io::net::tcp::connect`](/docs/reference/io/net/tcp/connect)
- [`accept`](/docs/reference/io/net/tcp/accept): Accepts one pending connection on `listener` without waiting.
- [`listen`](/docs/reference/io/net/tcp/listen): Opens a TCP socket listening on `host` and `port`.
- [`local_addr`](/docs/reference/io/net/tcp/local_addr): Returns the local `(host, port)` of a TCP listener or connected TCP stream.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote `(host, port)` of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns `TCP_NODELAY` on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
