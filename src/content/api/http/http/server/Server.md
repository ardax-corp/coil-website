---
slug: "http/http/server/Server"
package: "http"
title: "Server"
description: "A listening HTTP server socket and its TLS settings."
module: "http::server"
kind: "class"
name: "Server"
signature: "class Server"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/server.hy#L117"
order: 1
---

A listening HTTP server socket and its TLS settings.

[`bind`](/packages/http/reference/http/server/Server/bind) opens the listener; [`tls`](/packages/http/reference/http/server/Server/tls) turns on TLS for accepted connections. Then
hand the server and an [`HttpHandler`](/packages/http/reference/http/server/HttpHandler) to one of the serve functions:

| Function | Accepts | Protocol |
|---|---|---|
| [`serve`](/packages/http/reference/http/server/serve) | until the listener fails, a task per connection | HTTP/1.1, keep-alive |
| [`serve_once`](/packages/http/reference/http/server/serve_once) | one connection, one request | HTTP/1.1 |
| [`serve_one_client`](/packages/http/reference/http/server/serve_one_client) | one connection, until it closes | HTTP/1.1, keep-alive |
| [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all) | until the listener fails, one connection at a time | HTTP/2 (prior knowledge, or TLS ALPN [`h2`](/packages/http/reference/http/h2)), else HTTP/1.1 |
| [`h2_serve`](/packages/http/reference/http/server/h2_serve) | as [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all), TLS only | HTTP/2 or HTTP/1.1 by ALPN |
| [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once) | one connection | as [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all) |

[`http::ws::ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once) accepts a WebSocket upgrade on the same listener.
The program needs `--allow-net`, and with TLS also `--allow-attach` and the
`libtls` grants. Dropping the server closes the listener only when the
garbage collector runs.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `host` | `string` | Host the listener was bound to (`127.0.0.1` before [`bind`](/packages/http/reference/http/server/Server/bind)). |
| `port` | `int` | Port passed to [`bind`](/packages/http/reference/http/server/Server/bind); `0` means the system picked one (see [`bound_port`](/packages/http/reference/http/server/Server/bound_port)). |
| `listener` | `Option<Stream>` | The listening socket, `None` until [`bind`](/packages/http/reference/http/server/Server/bind) succeeds. |
| `tls_cert` | `string` | PEM certificate chain set by [`tls`](/packages/http/reference/http/server/Server/tls). |
| `tls_key` | `string` | PEM private key set by [`tls`](/packages/http/reference/http/server/Server/tls). |
| `use_tls` | `int` | 1 when [`tls`](/packages/http/reference/http/server/Server/tls) was called and accepted connections do a TLS handshake. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/server/Server/new) | An unbound server without TLS. |

## Methods

| Name | Description |
|------|-------------|
| [`bind`](/packages/http/reference/http/server/Server/bind) | Starts listening on `host:port`. |
| [`tls`](/packages/http/reference/http/server/Server/tls) | Serves TLS with this PEM certificate chain and private key. |
| [`bound_port`](/packages/http/reference/http/server/Server/bound_port) | The port the listener is bound to; useful after `bind(host, 0)`. |

## Examples

```coil
use http::server::{HttpHandler, Server, serve};
use http::h1::IncomingRequest;
use http::response::Response;
use http::url::HttpError;
use string::to_bytes;

class Hello {}

impl HttpHandler for Hello {
    fn handle(Hello self, IncomingRequest req) -> Response {
        let r = Response::ok();
        r.header("Content-Type", "text/plain");
        r.body(to_bytes("hello from " + req.path_val()));
        return r;
    }
}

fn main() -> Result<(), HttpError> {
    let srv = Server::new();
    srv.bind("127.0.0.1", 8080)?;
    serve(srv, new Hello())?;
    return ();
}
```

## See also

- [`Server::bind`](/packages/http/reference/http/server/Server/bind)
- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
- [`http::server::HttpHandler`](/packages/http/reference/http/server/HttpHandler)
- [`http::server::serve`](/packages/http/reference/http/server/serve)
- [`http::server::serve_once`](/packages/http/reference/http/server/serve_once)
- [`http::server::serve_one_client`](/packages/http/reference/http/server/serve_one_client)
- [`http::server::h2_serve_all`](/packages/http/reference/http/server/h2_serve_all)
- [`http::h2`](/packages/http/reference/http/h2)
- [`http::server::h2_serve`](/packages/http/reference/http/server/h2_serve)
- [`http::server::h2_serve_once`](/packages/http/reference/http/server/h2_serve_once)
- [`http::ws::ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once)
- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port)
