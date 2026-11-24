---
slug: "tls/tls/stream/TlsStream/alpn"
package: "tls"
title: "TlsStream::alpn"
description: "The ALPN protocol the peers agreed on (for example \"h2\"), or \"\" when they agreed on none."
module: "tls::stream"
kind: "method"
name: "alpn"
parent: "TlsStream"
signature: "pub fn alpn() -> Result<string, TlsError>"
import: "use tls::stream::{TlsStream};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/914a8d971d312c9aabf60aa84bc9e6aac15a859b/src/tls/stream.coil#L61"
order: 0
---

The ALPN protocol the peers agreed on (for example `"h2"`), or `""` when they agreed on none.

Called on a `TlsStream` value as `value.alpn(…)`.

## Returns

`Result<string, TlsError>`

## Errors

`TlsError::Io(IoError::AlreadyClosed)` once the stream was closed or
TLS disabled on it.

## See also

- [`TlsStream`](/packages/tls/reference/tls/stream/TlsStream): A TLS session over a connected TCP stream.
- [`TlsStream::disable`](/packages/tls/reference/tls/stream/TlsStream/disable): Sends close_notify, frees the session and returns the TCP stream, still open, for plaintext use or to close.
- [`TlsStream::tcp`](/packages/tls/reference/tls/stream/TlsStream/tcp): The TCP stream under the session.
