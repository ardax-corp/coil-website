---
slug: "http/http/server/serve_one_client"
package: "http"
title: "serve_one_client"
description: "Accepts one connection and serves HTTP/1.1 on it until the client closes or sends Connection: close."
module: "http::server"
kind: "fn"
name: "serve_one_client"
signature: "fn serve_one_client(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{serve_one_client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/server.hy#L310"
order: 4
---

Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.

Returns `Io(InvalidInput)` when `srv` is not bound and `Io` / `Tls` when
accepting or the handshake fails.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `handler` | `HttpHandler` |

## Returns

`Result<(), HttpError>`

## See also

- [`serve_once`](/packages/http/reference/http/server/serve_once): Accepts one connection, answers one HTTP/1.1 request with `handler`, and closes the connection.
- [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop): Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream.
- [`serve`](/packages/http/reference/http/server/serve): Serves HTTP/1.1 until accepting fails, each connection in its own task.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`.
- [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once): Accepts one connection and serves every request on it.
- [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): Accepts connections one at a time until accepting fails, serving each as `h2_serve_once` does (HTTP/1.1 fallback connections keep alive).
- [`h2_serve`](/packages/http/reference/http/server/h2_serve): The TLS form of `h2_serve_all`: ALPN `h2` is HTTP/2, anything else HTTP/1.1.
