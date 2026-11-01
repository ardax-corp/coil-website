---
slug: "http/http/h2_session/h2_connect"
package: "http"
title: "h2_connect"
description: "GET url over HTTP/2 on a new connection, like h2_request."
module: "http::h2_session"
kind: "fn"
name: "h2_connect"
signature: "fn h2_connect(string url) -> Result<Response, HttpError>"
import: "use http::h2_session::{h2_connect};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h2_session.coil#L1753"
order: 3
---

`GET url` over HTTP/2 on a new connection, like [`h2_request`](/packages/http/reference/http/h2_session/h2_request).

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<Response, HttpError>`

## Examples

```coil
use http::h2_session::h2_connect;

fn main() {
    let r = match h2_connect("http://127.0.0.1:8080/") {
        Result::Ok(r) => r,
        Result::Err(e) => panic show(e),
    };
    if r.status != 200 {
        panic "unexpected status";
    }
}
```

## See also

- [`http::h2_session::h2_request`](/packages/http/reference/http/h2_session/h2_request)
- [`h2_connect_tls`](/packages/http/reference/http/h2_session/h2_connect_tls): `h2_connect` with TLS options: `verify` false skips certificate checks, a non-empty `ca_pem` trusts that CA.
- [`h2_connect_two`](/packages/http/reference/http/h2_session/h2_connect_two): Two cleartext prior-knowledge GETs multiplexed on one new connection (streams 1 and 3).
- [`h2_get_over_h2`](/packages/http/reference/http/h2_session/h2_get_over_h2): `GET u` over HTTP/2 on an already connected stream (cleartext prior knowledge, or TLS after ALPN `h2`).
