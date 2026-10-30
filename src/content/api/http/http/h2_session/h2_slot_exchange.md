---
slug: "http/http/h2_session/h2_slot_exchange"
package: "http"
title: "h2_slot_exchange"
description: "Request on this slot. Reuses the live connection for the same origin."
module: "http::h2_session"
kind: "fn"
name: "h2_slot_exchange"
signature: "fn h2_slot_exchange(H2ClientSlot slot, string url, string method, Headers extra, Vec<byte> body) -> Result<Response, HttpError>"
import: "use http::h2_session::{h2_slot_exchange};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h2_session.hy#L1803"
order: 9
---

Request on this slot. Reuses the live connection for the same origin.

## Parameters

| Name | Type |
|------|------|
| `slot` | `H2ClientSlot` |
| `url` | `string` |
| `method` | `string` |
| `extra` | `Headers` |
| `body` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## See also

- [`h2_roundtrip`](/packages/http/reference/http/h2_session/h2_roundtrip): One request/response on an open HTTP/2 connection.
- [`h2_request`](/packages/http/reference/http/h2_session/h2_request): HTTP/2 request.
- [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect): GET: cleartext prior-knowledge, or HTTPS TLS ALPN `h2` with HTTP/1.1 fallback.
- [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls): HTTPS GET after TLS enable with optional CA PEM (`""` uses default verify).
- [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two): Two cleartext prior-knowledge GETs on one connection (streams 1 and 3).
- [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2): HTTP/2 GET on an already-connected stream (prior knowledge or TLS `h2`).
