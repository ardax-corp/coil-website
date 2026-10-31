---
slug: "http/http/h2_session/h2_get_over_h2"
package: "http"
title: "h2_get_over_h2"
description: "GET u over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN h2)."
module: "http::h2_session"
kind: "fn"
name: "h2_get_over_h2"
signature: "fn h2_get_over_h2(Stream s, Url u) -> Result<Response, HttpError>"
import: "use http::h2_session::{h2_get_over_h2};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/h2_session.hy#L1781"
order: 6
---

`GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN [`h2`](/packages/http/reference/http/h2)).

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `u` | `Url` |

## Returns

`Result<Response, HttpError>`

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`h2_request`](/packages/http/reference/http/h2_session/h2_request): Sends one HTTP/2 request on a new connection and closes it.
- [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect): `GET url` over HTTP/2 on a new connection, like `h2_request`.
- [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls): `h2_connect` with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA.
- [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two): Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3).
