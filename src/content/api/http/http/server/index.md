---
slug: "http/http/server/index"
package: "http"
title: "http::server"
description: "HTTP/1.1 and HTTP/2 servers, cleartext or TLS."
module: "http::server"
kind: "module"
name: "http::server"
origin: "package"
auto: false
order: 8
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::server::{serve_once, serve_one_client};
```

## Types

| Name | Description |
|------|-------------|
| [`Server`](/packages/http/reference/http/server/Server) |  |

## Traits

| Name | Description |
|------|-------------|
| [`HttpHandler`](/packages/http/reference/http/server/HttpHandler) |  |

## Functions

| Name | Description |
|------|-------------|
| [`serve_once`](/packages/http/reference/http/server/serve_once) | Accept one TCP connection, optionally wrap TLS, handle one request. |
| [`serve_one_client`](/packages/http/reference/http/server/serve_one_client) | Accept one TCP connection and serve HTTP/1.1 until the client closes or sends `Connection: close`. |
| [`serve_accepted`](/packages/http/reference/http/server/serve_accepted) | One accepted connection, in its own task: TLS handshake (when enabled), then HTTP/1.1 until the client closes. |
| [`serve`](/packages/http/reference/http/server/serve) | Accept loop: each connection is served by its own task, so a slow client (or a TLS handshake) does not hold up the others. |
| [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn) | Speak prior-knowledge HTTP/2 on an already-accepted stream. |
| [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once) | Accept one TCP connection. |
| [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all) | Accept connections until the listener fails. |
| [`h2_serve`](/packages/http/reference/http/server/h2_serve) | TLS HTTP/2 accept loop. |
