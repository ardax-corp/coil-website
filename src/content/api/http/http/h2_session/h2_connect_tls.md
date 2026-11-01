---
slug: "http/http/h2_session/h2_connect_tls"
package: "http"
title: "h2_connect_tls"
description: "h2_connect with TLS options: verify false skips certificate checks, a non-empty ca_pem trusts that CA."
module: "http::h2_session"
kind: "fn"
name: "h2_connect_tls"
signature: "fn h2_connect_tls(string url, bool verify, string ca_pem) -> Result<Response, HttpError>"
import: "use http::h2_session::{h2_connect_tls};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.coil#L1760"
order: 4
---

[`h2_connect`](/packages/http/reference/http/h2_session/h2_connect) with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `verify` | `bool` |
| `ca_pem` | `string` |

## Returns

`Result<Response, HttpError>`

## See also

- [`http::h2_session::h2_connect`](/packages/http/reference/http/h2_session/h2_connect)
- [`h2_request`](/packages/http/reference/http/h2_session/h2_request): Sends one HTTP/2 request on a new connection and closes it.
- [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two): Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3).
- [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2): `GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN `h2`).
