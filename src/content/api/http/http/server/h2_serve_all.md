---
slug: "http/http/server/h2_serve_all"
package: "http"
title: "h2_serve_all"
description: "Accepts connections one at a time until accepting fails, serving each as h2_serve_once does (HTTP/1.1 fallback connections keep alive)."
module: "http::server"
kind: "fn"
name: "h2_serve_all"
signature: "fn h2_serve_all(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{h2_serve_all};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/server.hy#L709"
order: 8
---

Accepts connections one at a time until accepting fails, serving each as [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once) does (HTTP/1.1 fallback connections keep alive).

Errors on one connection only end that connection. Returns
`Io(InvalidInput)` when `srv` is not bound; closes and clears the listener
when it returns.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `handler` | `HttpHandler` |

## Returns

`Result<(), HttpError>`

## See also

- [`http::server::h2_serve_once`](/packages/http/reference/http/server/h2_serve_once)
- [`serve_once`](/packages/http/reference/http/server/serve_once): Accepts one connection, answers one HTTP/1.1 request with `handler`, and closes the connection.
- [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop): Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.
- [`serve`](/packages/http/reference/http/server/serve): Serves HTTP/1.1 until accepting fails, each connection in its own task.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`.
- [`h2_serve`](/packages/http/reference/http/server/h2_serve): The TLS form of `h2_serve_all`: ALPN `h2` is HTTP/2, anything else HTTP/1.1.
