---
slug: "tls/tls/stream/TlsStream/disable"
package: "tls"
title: "TlsStream::disable"
description: "Sends close_notify, frees the session and returns the TCP stream, still open, for plaintext use or to close."
module: "tls::stream"
kind: "method"
name: "disable"
parent: "TlsStream"
signature: "pub fn disable() -> Result<Stream, TlsError>"
import: "use tls::stream::{TlsStream};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/914a8d971d312c9aabf60aa84bc9e6aac15a859b/src/tls/stream.coil#L75"
order: 1
---

Sends close_notify, frees the session and returns the TCP stream, still open, for plaintext use or to close.

Called on a `TlsStream` value as `value.disable(…)`.

## Returns

`Result<Stream, TlsError>`

## Errors

`TlsError::Io(IoError::AlreadyClosed)` once the stream was closed or
TLS disabled on it.

## See also

- [`TlsStream`](/packages/tls/reference/tls/stream/TlsStream): A TLS session over a connected TCP stream.
- [`TlsStream::alpn`](/packages/tls/reference/tls/stream/TlsStream/alpn): The ALPN protocol the peers agreed on (for example `"h2"`), or `""` when they agreed on none.
- [`TlsStream::tcp`](/packages/tls/reference/tls/stream/TlsStream/tcp): The TCP stream under the session.
