---
slug: "http/http/url/HttpError"
package: "http"
title: "HttpError"
description: "An HTTP failure, returned by every fallible call in this package."
module: "http::url"
kind: "enum"
name: "HttpError"
signature: "enum HttpError"
import: "use http::url::{HttpError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/url.hy#L26"
order: 0
---

An HTTP failure, returned by every fallible call in this package.

Socket and TLS failures keep the lower layer's error (`Io(IoError)`,
`Tls(TlsError)`), so a caller can tell a timeout from a refused connection or a
bad certificate. The enum derives [`Show`](/docs/reference/prelude/ops/Show) and [`Eq`](/docs/reference/prelude/ops/Eq).

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

## Examples

```coil
use tests::assert;
use http::url::{HttpError, parse_url};

let bad = match parse_url("ftp://example.com/") {
    Result::Ok(_) => false,
    Result::Err(HttpError::UnsupportedScheme) => true,
    Result::Err(_) => false,
};
assert!(bad);
```

## See also

- [`Show`](/docs/reference/prelude/ops/Show)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`http`](/packages/http/reference/http)
- [`http::ws`](/packages/http/reference/http/ws)
