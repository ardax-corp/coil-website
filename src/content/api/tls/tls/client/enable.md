---
slug: "tls/tls/client/enable"
package: "tls"
title: "enable"
description: "Runs a TLS client handshake on the connected TCP stream s and returns the same Stream, now encrypted."
module: "tls::client"
kind: "fn"
name: "enable"
signature: "fn enable(Stream s, string host, ClientOpts opts) -> Result<Stream, TlsError>"
import: "use tls::client::{enable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/8eb103338d9385609c0e75d08c5fc5c9b86015a6/src/tls/client.coil#L90"
order: 1
---

Runs a TLS client handshake on the connected TCP stream `s` and returns the same `Stream`, now encrypted.

`host` is the server name sent in SNI and checked against the server's
certificate (a DNS name or an IP address). After `enable`, the stream's
`read`, `write` and close go through TLS. The handshake does not block
the thread: on `WouldBlock` it parks the task until the socket is ready,
so call it from a normal task, not a blocking thread. Do not call
`enable` twice on one stream.

The program needs `--allow-attach`, `--allow-dload tls` and libtls on
the FFI search path (see the package README).

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `host` | `string` |
| `opts` | `ClientOpts` |

## Returns

`Result<Stream, TlsError>`

## Errors

- `TlsError::Certificate` when the server's certificate is untrusted,
  expired or for another name;
- `TlsError::Handshake` for any other handshake failure or an alert;
- `TlsError::Io(e)` when the socket fails (`IoError::TimedOut` past
  `timeout_ms`), and `Io(IoError::InvalidInput)` for an empty or invalid
  `host`, a bad `ca_pem`, or a stream that is not a socket.

## Examples

An HTTPS request over a socket the caller connected:

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
    return read_to_end(s).map_err(io_err)?;
}
fn main() {}
```

## See also

- [`disable`](/packages/tls/reference/tls/client/disable): Sends TLS `close_notify` to the peer and returns `s`.
