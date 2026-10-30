---
slug: "http/http/server/h2_serve"
package: "http"
title: "h2_serve"
description: "TLS HTTP/2 accept loop. Requires Server.tls. ALPN other than h2 is HTTP/1.1."
module: "http::server"
kind: "fn"
name: "h2_serve"
signature: "fn h2_serve(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{h2_serve};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L601"
order: 7
---

TLS HTTP/2 accept loop. Requires [`Server.tls`](/packages/http/reference/http/server/Server/tls). ALPN other than [`h2`](/packages/http/reference/http/h2) is HTTP/1.1.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `handler` | `HttpHandler` |

## Returns

`Result<(), HttpError>`

## See also

- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
- [`http::h2`](/packages/http/reference/http/h2)
- [`serve_once`](/packages/http/reference/http/server/serve_once): Accept one TCP connection, optionally wrap TLS, handle one request.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accept one TCP connection and serve HTTP/1.1 until the client closes or sends `Connection: close`.
- [`serve_accepted`](/packages/http/reference/http/server/serve_accepted): One accepted connection, in its own task: TLS handshake (when enabled), then HTTP/1.1 until the client closes.
- [`serve`](/packages/http/reference/http/server/serve): Accept loop: each connection is served by its own task, so a slow client (or a TLS handshake) does not hold up the others.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speak prior-knowledge HTTP/2 on an already-accepted stream.
- [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once): Accept one TCP connection.
