---
slug: "http/http/h2_session/h2_connect_two"
package: "http"
title: "h2_connect_two"
description: "Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3)."
module: "http::h2_session"
kind: "fn"
name: "h2_connect_two"
signature: "fn h2_connect_two(string url_a, string url_b) -> Result<H2Pair, HttpError>"
import: "use http::h2_session::{h2_connect_two};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.coil#L1767"
order: 5
---

Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3).

## Parameters

| Name | Type |
|------|------|
| `url_a` | `string` |
| `url_b` | `string` |

## Returns

`Result<H2Pair, HttpError>`

## See also

- [`h2_request`](/packages/http/reference/http/h2_session/h2_request): Sends one HTTP/2 request on a new connection and closes it.
- [`h2_connect`](/packages/http/reference/http/h2_session/h2_connect): `GET url` over HTTP/2 on a new connection, like `h2_request`.
- [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls): `h2_connect` with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA.
- [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2): `GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN `h2`).
