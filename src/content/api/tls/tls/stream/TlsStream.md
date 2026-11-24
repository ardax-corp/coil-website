---
slug: "tls/tls/stream/TlsStream"
package: "tls"
title: "TlsStream"
description: "A TLS session over a connected TCP stream."
module: "tls::stream"
kind: "class"
name: "TlsStream"
signature: "shared class TlsStream"
import: "use tls::stream::{TlsStream};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/914a8d971d312c9aabf60aa84bc9e6aac15a859b/src/tls/stream.coil#L47"
order: 0
---

A TLS session over a connected TCP stream.

`read` and `write` move plaintext; the records go over the socket.
Neither waits: each returns `Err(IoError::WouldBlock)` when the socket
is not ready, and `wait_readable` / `wait_writable` then wait for
whichever way the session needs the socket (a read can need to send a
record first). `close` sends close_notify, frees the session and closes
the socket; dropping the stream frees the session without either.

## Methods

| Name | Description |
|------|-------------|
| [`alpn`](/packages/tls/reference/tls/stream/TlsStream/alpn) | The ALPN protocol the peers agreed on (for example `"h2"`), or `""` when they agreed on none. |
| [`disable`](/packages/tls/reference/tls/stream/TlsStream/disable) | Sends close_notify, frees the session and returns the TCP stream, still open, for plaintext use or to close. |
| [`tcp`](/packages/tls/reference/tls/stream/TlsStream/tcp) | The TCP stream under the session. |

## Trait implementations

- `Read` for `TlsStream`
- `Write` for `TlsStream`
- `Close` for `TlsStream`

## Examples

```coil
use io::{IoError, Stream};
use io::sync::{write_all, read_to_end};
use string::{to_bytes};
use tls::client::{enable, ClientOpts};
use tls::error::{TlsError};

fn io_err(IoError e) -> TlsError {
    return TlsError::Io(e);
}

// `tcp` is a connected socket, from `io::net::tcp::connect(host, 443)`.
fn fetch(Stream tcp, string host) -> Result<Vec<byte>, TlsError> {
    let s = enable(tcp, host, new ClientOpts(true, None, None, 10000, "http/1.1"))?;
    let request = "GET / HTTP/1.1\r\nHost: " + host + "\r\nConnection: close\r\n\r\n";
    write_all(s, to_bytes(request)).map_err(io_err)?;
    let body = read_to_end(s).map_err(io_err)?;
    s.close().map_err(io_err)?;
    return body;
}
fn main() {}
```
