---
slug: "http/http/url/HttpError"
package: "http"
title: "HttpError"
description: "An HTTP failure. Socket and TLS failures keep the lower layer's error."
module: "http::url"
kind: "enum"
name: "HttpError"
signature: "enum HttpError"
import: "use http::url::{HttpError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/url.hy#L8"
order: 0
---

An HTTP failure. Socket and TLS failures keep the lower layer's error.

## Variants

### `BadUrl` {#variant-badurl}

The URL does not parse, or its host or path holds CR / LF.

### `InvalidHeader` {#variant-invalidheader}

A request header name or value holds CR / LF, or a header line has no `:`.

### `UnsupportedScheme` {#variant-unsupportedscheme}

The URL scheme is not [`http`](/packages/http/reference/http), `https`, [`ws`](/packages/http/reference/http/ws) or `wss`.

### `NotSupported` {#variant-notsupported}

The feature is not implemented (HTTP/3).

### `Protocol` {#variant-protocol}

The peer broke HTTP/1.1, HTTP/2 or WebSocket framing.

### `Io(IoError)` {#variant-io}

The socket failed.

### `Tls(TlsError)` {#variant-tls}

The TLS layer failed.

## See also

- [`http`](/packages/http/reference/http)
- [`http::ws`](/packages/http/reference/http/ws)
