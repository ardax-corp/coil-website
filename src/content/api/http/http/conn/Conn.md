---
slug: "http/http/conn/Conn"
package: "http"
title: "Conn"
description: "A connection HTTP runs over: a plain TCP Stream or a TlsStream."
module: "http::conn"
kind: "trait"
name: "Conn"
signature: "trait Conn<S: Read + Write + Close>"
import: "use http::conn::{Conn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L36"
order: 0
---

A connection HTTP runs over: a plain TCP `Stream` or a `TlsStream`.

It reads, writes and closes as [`io::Read`](/docs/reference/io/Read), [`io::Write`](/docs/reference/io/Write) and [`io::Close`](/docs/reference/io/Close), so
[`io::sync::write_all`](/packages/stdlib/reference/io/sync/write_all) and the buffered reader take it, and [`protocol`](/packages/http/reference/http/conn/Conn/protocol) names
the ALPN protocol a TLS handshake agreed on.

## Required methods

| Name | Description |
|------|-------------|
| [`protocol`](/packages/http/reference/http/conn/Conn/protocol) | The ALPN protocol the peers agreed on (`"h2"`), or `""` for none and for plain TCP. |

## Trait implementations

- `Read` for `Conn`
- `Write` for `Conn`
- `Close` for `Conn`

## Examples

```coil
use io::net::tcp::{connect};
use io::sync::{write_all};
use string::{to_bytes};
use http::conn::{Conn};

fn main() {
    let tcp = match connect("127.0.0.1", 8080) {
        Result::Ok(s) => s,
        Result::Err(e) => panic e.show(),
    };
    let c: Conn = tcp;
    // Plain TCP agrees on no ALPN protocol: `c.protocol()` is `""`.
    let _ = write_all(c, to_bytes("GET / HTTP/1.1\r\nHost: x\r\n\r\n"));
    let _ = c.close();
}
```

## See also

- [`io::Read`](/docs/reference/io/Read)
- [`io::Write`](/docs/reference/io/Write)
- [`io::Close`](/docs/reference/io/Close)
- [`io::sync::write_all`](/packages/stdlib/reference/io/sync/write_all)
- [`Conn::protocol`](/packages/http/reference/http/conn/Conn/protocol)
