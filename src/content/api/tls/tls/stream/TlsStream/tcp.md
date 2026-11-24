---
slug: "tls/tls/stream/TlsStream/tcp"
package: "tls"
title: "TlsStream::tcp"
description: "The TCP stream under the session. Reading or writing it directly breaks the session."
module: "tls::stream"
kind: "method"
name: "tcp"
parent: "TlsStream"
signature: "pub fn tcp() -> Stream"
import: "use tls::stream::{TlsStream};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/914a8d971d312c9aabf60aa84bc9e6aac15a859b/src/tls/stream.coil#L87"
order: 2
---

The TCP stream under the session. Reading or writing it directly breaks the session.

Called on a `TlsStream` value as `value.tcp(…)`.

## Returns

`Stream`

## See also

- [`TlsStream`](/packages/tls/reference/tls/stream/TlsStream): A TLS session over a connected TCP stream.
- [`TlsStream::alpn`](/packages/tls/reference/tls/stream/TlsStream/alpn): The ALPN protocol the peers agreed on (for example `"h2"`), or `""` when they agreed on none.
- [`TlsStream::disable`](/packages/tls/reference/tls/stream/TlsStream/disable): Sends close_notify, frees the session and returns the TCP stream, still open, for plaintext use or to close.
