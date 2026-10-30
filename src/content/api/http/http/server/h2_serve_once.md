---
slug: "http/http/server/h2_serve_once"
package: "http"
title: "h2_serve_once"
description: "Accept one TCP connection. HTTP/2 prior knowledge, or TLS ALPN h2. ALPN http/1.1 (or empty) is served as HTTP/1.1 through the same handler."
module: "http::server"
kind: "fn"
name: "h2_serve_once"
signature: "fn h2_serve_once(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{h2_serve_once};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L557"
order: 5
---

Accept one TCP connection. HTTP/2 prior knowledge, or TLS ALPN [`h2`](/packages/http/reference/http/h2). ALPN `http/1.1` (or empty) is served as HTTP/1.1 through the same handler.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `handler` | `HttpHandler` |

## Returns

`Result<(), HttpError>`

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`serve_once`](/packages/http/reference/http/server/serve_once): Accept one TCP connection, optionally wrap TLS, handle one request.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accept one TCP connection and serve HTTP/1.1 until the client closes or sends `Connection: close`.
- [`serve_accepted`](/packages/http/reference/http/server/serve_accepted): One accepted connection, in its own task: TLS handshake (when enabled), then HTTP/1.1 until the client closes.
- [`serve`](/packages/http/reference/http/server/serve): Accept loop: each connection is served by its own task, so a slow client (or a TLS handshake) does not hold up the others.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speak prior-knowledge HTTP/2 on an already-accepted stream.
- [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): Accept connections until the listener fails.
- [`h2_serve`](/packages/http/reference/http/server/h2_serve): TLS HTTP/2 accept loop.
