---
slug: "http/http/server/serve"
package: "http"
title: "serve"
description: "Serves HTTP/1.1 until accepting fails, each connection in its own task."
module: "http::server"
kind: "fn"
name: "serve"
signature: "fn serve(Server srv, HttpHandler handler) -> Result<(), HttpError>"
import: "use http::server::{serve};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/server.hy#L359"
order: 5
---

Serves HTTP/1.1 until accepting fails, each connection in its own task.

A slow client or TLS handshake does not hold up the others. A connection is
kept open until the client closes it or sends `Connection: close`; per
connection errors only end that connection. Returns `Io(InvalidInput)` when
`srv` is not bound; otherwise returns once `accept` fails and the open
connections are done, after closing the listener.

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
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`.
- [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once): Accepts one connection and serves every request on it.
- [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): Accepts connections one at a time until accepting fails, serving each as `h2_serve_once` does (HTTP/1.1 fallback connections keep alive).
- [`h2_serve`](/packages/http/reference/http/server/h2_serve): The TLS form of `h2_serve_all`: ALPN `h2` is HTTP/2, anything else HTTP/1.1.
