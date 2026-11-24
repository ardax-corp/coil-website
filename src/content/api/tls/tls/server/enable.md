---
slug: "tls/tls/server/enable"
package: "tls"
title: "enable"
description: "Runs a TLS server handshake on the accepted TCP stream s and returns a TlsStream over it."
module: "tls::server"
kind: "fn"
name: "enable"
signature: "fn enable(Stream s, ServerOpts opts) -> Result<TlsStream, TlsError>"
import: "use tls::server::{enable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/914a8d971d312c9aabf60aa84bc9e6aac15a859b/src/tls/server.coil#L85"
order: 1
---

Runs a TLS server handshake on the accepted TCP stream `s` and returns a `TlsStream` over it.

As with the client, the `TlsStream` implements [`io::Read`](/docs/reference/io/Read), [`io::Write`](/docs/reference/io/Write)
and [`io::Close`](/docs/reference/io/Close), and the handshake waits for the socket on `WouldBlock`
instead of blocking the thread. Read the negotiated protocol with
`alpn()`. The program needs libtls on the FFI search path.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `opts` | `ServerOpts` |

## Returns

`Result<TlsStream, TlsError>`

## Errors

- `TlsError::Io(IoError::InvalidInput)` for a certificate or key that does
  not parse, a key that does not match, a bad `client_ca_pem`, or a stream
  that is not a socket;
- `TlsError::Certificate` when a required client certificate is rejected;
- `TlsError::Handshake` for any other handshake failure or an alert;
- `TlsError::Io(e)` when the socket fails (`IoError::TimedOut` past
  `timeout_ms`).

## Examples

Greeting one client on a listening socket:

```coil
use io::{IoError, Stream};
use io::sync::{accept_wait, write_all};
use string::{to_bytes};
use tls::server::{enable, ServerOpts};
use tls::error::{TlsError};

fn io_err(IoError e) -> TlsError {
    return TlsError::Io(e);
}

// `listener` is from `io::net::tcp::listen("0.0.0.0", 8443)`; the PEM
// text from `io::file::read_text("cert.pem")` and so on.
fn greet_one(Stream listener, string cert, string key) -> Result<(), TlsError> {
    let tcp = accept_wait(listener).map_err(io_err)?;
    let s = enable(tcp, new ServerOpts(cert, key, 10000, "", ""))?;
    write_all(s, to_bytes("hello over TLS\n")).map_err(io_err)?;
    s.close().map_err(io_err)?;
    return;
}
fn main() {}
```

## See also

- [`io::Read`](/docs/reference/io/Read)
- [`io::Write`](/docs/reference/io/Write)
- [`io::Close`](/docs/reference/io/Close)
