---
slug: "http/http/server/h2_serve_once"
package: "http"
title: "h2_serve_once"
description: "Accepts one connection and serves every request on it."
module: "http::server"
kind: "fn"
name: "h2_serve_once"
signature: "fn h2_serve_once(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{h2_serve_once};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/server.coil#L677"
order: 8
---

Accepts one connection and serves every request on it.

Cleartext connections speak prior-knowledge HTTP/2. With [`Server::tls`](/packages/http/reference/http/server/Server/tls), ALPN
[`h2`](/packages/http/reference/http/h2) selects HTTP/2 and anything else (including no ALPN) one HTTP/1.1
request through the same handler. Errors are as for [`serve_once`](/packages/http/reference/http/server/serve_once).

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
- [`http::server::serve_once`](/packages/http/reference/http/server/serve_once)
- [`server_conn`](/packages/http/reference/http/server/server_conn): The connection to serve on the accepted socket `conn`: a TLS session when `srv` has a certificate (`Server::tls`), offering `alpn`, otherwise `conn` itself.
- [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop): Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.
- [`serve`](/packages/http/reference/http/server/serve): Serves HTTP/1.1 until accepting fails, each connection in its own task.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`.
