---
slug: "tls/tls/server/enable"
package: "tls"
title: "enable"
description: "Runs a TLS server handshake on the accepted TCP stream s and returns the same Stream, now encrypted."
module: "tls::server"
kind: "fn"
name: "enable"
signature: "fn enable(Stream s, ServerOpts opts) -> Result<Stream, TlsError>"
import: "use tls::server::{enable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/8eb103338d9385609c0e75d08c5fc5c9b86015a6/src/tls/server.hy#L85"
order: 1
---

Runs a TLS server handshake on the accepted TCP stream `s` and returns the same `Stream`, now encrypted.

As with the client, the stream's `read`, `write` and close go through TLS
afterwards, and the handshake parks the task on `WouldBlock` instead of
blocking the thread. Read the negotiated protocol with
[`tls::alpn_protocol`](/packages/tls/reference/tls/alpn_protocol). The program needs `--allow-attach`, `--allow-dload
tls` and libtls on the FFI search path.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `opts` | `ServerOpts` |

## Returns

`Result<Stream, TlsError>`

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
use io::{IoError, Stream, close};
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
    close(s).map_err(io_err)?;
    return;
}
fn main() {}
```

## See also

- [`tls::alpn_protocol`](/packages/tls/reference/tls/alpn_protocol)
- [`disable`](/packages/tls/reference/tls/server/disable): Sends TLS `close_notify` to the client and returns `s`, as `tls::client::disable` does.
