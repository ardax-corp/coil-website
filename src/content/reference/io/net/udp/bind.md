---
slug: "io/net/udp/bind"
title: "bind"
description: "Opens a UDP socket bound to host and port."
module: "io::net::udp"
kind: "fn"
name: "bind"
signature: "fn bind(string host, int port) -> Result<Stream, IoError>"
import: "use io::net::udp::{bind};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/io/net/udp.hy#L32"
order: 0
---

Opens a UDP socket bound to `host` and `port`.

`port` may be `0` to let the OS pick a free port; read it back with
[`local_port`](/docs/reference/io/net/udp/local_port). A host name is resolved and only the first address is
used, so prefer an explicit IP such as `"127.0.0.1"` or `"0.0.0.0"`.
Exchange datagrams with [`send_to`](/docs/reference/io/net/udp/send_to) and [`recv_from`](/docs/reference/io/net/udp/recv_from).

Returns `Err(IoError::InvalidInput)` for a port outside `0..=65535`.
A program that reaches `bind` compiles only with `--allow-net`.

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
use io::net::udp::{bind, local_port};
use tests::assert;
fn run() -> Result<int, IoError> {
    let sock = bind("127.0.0.1", 0)?;
    return local_port(sock)?;
}

fn main() {
    let port = match run() {
        Result::Ok(p) => p,
        Result::Err(_) => 0,
    };
    assert!(port > 0);
}
```

## See also

- [`io::net::udp::local_port`](/docs/reference/io/net/udp/local_port)
- [`io::net::udp::send_to`](/docs/reference/io/net/udp/send_to)
- [`io::net::udp::recv_from`](/docs/reference/io/net/udp/recv_from)
- [`connect`](/docs/reference/io/net/udp/connect): Opens a UDP socket whose default peer is `host` on `port`.
