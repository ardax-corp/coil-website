---
slug: "http/http/server/h2_serve"
package: "http"
title: "h2_serve"
description: "The TLS form of h2_serve_all: ALPN h2 is HTTP/2, anything else HTTP/1.1."
module: "http::server"
kind: "fn"
name: "h2_serve"
signature: "fn h2_serve(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{h2_serve};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/server.coil#L727"
order: 10
---

The TLS form of [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): ALPN [`h2`](/packages/http/reference/http/h2) is HTTP/2, anything else HTTP/1.1.

Returns `NotSupported` unless [`Server::tls`](/packages/http/reference/http/server/Server/tls) was called.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `handler` | `HttpHandler` |

## Returns

`Result<(), HttpError>`

## See also

- [`http::server::h2_serve_all`](/packages/http/reference/http/server/h2_serve_all)
- [`http::h2`](/packages/http/reference/http/h2)
- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
- [`server_conn`](/packages/http/reference/http/server/server_conn): The connection to serve on the accepted socket `conn`: a TLS session when `srv` has a certificate (`Server::tls`), offering `alpn`, otherwise `conn` itself.
- [`serve_once`](/packages/http/reference/http/server/serve_once): Accepts one connection, answers one HTTP/1.1 request with `handler`, and closes the connection.
- [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop): Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.
- [`serve`](/packages/http/reference/http/server/serve): Serves HTTP/1.1 until accepting fails, each connection in its own task.
