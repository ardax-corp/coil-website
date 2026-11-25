---
slug: "http/http/server/server_conn"
package: "http"
title: "server_conn"
description: "The connection to serve on the accepted socket conn: a TLS session when srv has a certificate (Server::tls), offering alpn, otherwise conn itself. A failed handshake closes conn and returns Tls."
module: "http::server"
kind: "fn"
name: "server_conn"
signature: "fn server_conn(Server srv, Stream conn, int timeout_ms, string alpn) -> Result<Conn, HttpError>"
import: "use http::server::{server_conn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/server.coil#L219"
order: 2
---

The connection to serve on the accepted socket `conn`: a TLS session when `srv` has a certificate ([`Server::tls`](/packages/http/reference/http/server/Server/tls)), offering `alpn`, otherwise `conn` itself. A failed handshake closes `conn` and returns `Tls`.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |
| `conn` | `Stream` |
| `timeout_ms` | `int` |
| `alpn` | `string` |

## Returns

`Result<Conn, HttpError>`

## See also

- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
- [`serve_once`](/packages/http/reference/http/server/serve_once): Accepts one connection, answers one HTTP/1.1 request with `handler`, and closes the connection.
- [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop): Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream.
- [`serve_one_client`](/packages/http/reference/http/server/serve_one_client): Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`.
- [`serve`](/packages/http/reference/http/server/serve): Serves HTTP/1.1 until accepting fails, each connection in its own task.
- [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn): Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`.
- [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once): Accepts one connection and serves every request on it.
- [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): Accepts connections one at a time until accepting fails, serving each as `h2_serve_once` does (HTTP/1.1 fallback connections keep alive).
