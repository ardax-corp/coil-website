---
slug: "http/http/h2_session/h2_request"
package: "http"
title: "h2_request"
description: "Sends one HTTP/2 request on a new connection and closes it."
module: "http::h2_session"
kind: "fn"
name: "h2_request"
signature: "fn h2_request(string url, string method, Headers extra, Vec<byte> body) -> Result<Response, HttpError>"
import: "use http::h2_session::{h2_request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.hy#L1732"
order: 2
---

Sends one HTTP/2 request on a new connection and closes it.

Cleartext URLs use prior knowledge; `https://` offers ALPN `h2,http/1.1` and
sends the request as HTTP/1.1 when the server does not pick [`h2`](/packages/http/reference/http/h2). Use
`Client::h2_send` to reuse the connection.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `method` | `string` |
| `extra` | `Headers` |
| `body` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect): `GET url` over HTTP/2 on a new connection, like `h2_request`.
- [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls): `h2_connect` with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA.
- [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two): Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3).
- [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2): `GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN `h2`).
