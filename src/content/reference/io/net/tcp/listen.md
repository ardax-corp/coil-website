---
slug: "io/net/tcp/listen"
title: "listen"
description: "Opens a TCP socket listening on host and port."
module: "io::net::tcp"
kind: "fn"
name: "listen"
signature: "fn listen(string host, int port) -> Result<Stream, IoError>"
import: "use io::net::tcp::{listen};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/io/net/tcp.hy#L146"
order: 3
---

Opens a TCP socket listening on `host` and `port`.

`port` may be `0` to let the OS pick a free port; read it back with
[`local_addr`](/docs/reference/io/net/tcp/local_addr). A host name is resolved and only the first address is
used, so prefer an explicit IP such as `"127.0.0.1"` or `"0.0.0.0"`.
Take connections with [`accept`](/docs/reference/io/net/tcp/accept) (or [`io::sync::accept_wait`](/docs/reference/io/sync/accept_wait)).

Returns `Err(IoError::InvalidInput)` for a port outside `0..=65535`;
an address already in use is reported as an OS error.
A program that reaches `listen` compiles only with `--allow-net`.

## Parameters

| Name | Type |
|------|------|
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<Stream, IoError>`

## Examples

```coil
use io::{IoError};
use io::net::tcp::{connect, listen, local_addr};
use io::sync::{accept_wait, read_to_end, write_all};
use io::net::tcp::{shutdown};
use string::{from_bytes, to_bytes};
use tests::assert;
fn run() -> Result<string, IoError> {
    let listener = listen("127.0.0.1", 0)?;
    let (_, port) = local_addr(listener)?;
    let client = connect("127.0.0.1", port)?;
    let server = accept_wait(listener)?;
    write_all(client, to_bytes("hello"))?;
    shutdown(client, 1)?;
    return from_bytes(read_to_end(server)?)?;
}

fn main() {
    let got = match run() {
        Result::Ok(s) => s,
        Result::Err(_) => "",
    };
    assert!(got == "hello");
}
```

## See also

- [`io::net::tcp::local_addr`](/docs/reference/io/net/tcp/local_addr)
- [`io::net::tcp::accept`](/docs/reference/io/net/tcp/accept)
- [`io::sync::accept_wait`](/docs/reference/io/sync/accept_wait)
- [`connect`](/docs/reference/io/net/tcp/connect): Opens a TCP connection to host on port.
- [`connect_timeout`](/docs/reference/io/net/tcp/connect_timeout): Opens a TCP connection to host on port, giving up after ms milliseconds.
- [`peer_addr`](/docs/reference/io/net/tcp/peer_addr): Returns the remote (host, port) of a connected TCP stream.
- [`set_nodelay`](/docs/reference/io/net/tcp/set_nodelay): Turns TCP_NODELAY on or off for a TCP stream.
- [`shutdown`](/docs/reference/io/net/tcp/shutdown): Shuts down the reading half, the writing half, or both halves of a TCP stream.
