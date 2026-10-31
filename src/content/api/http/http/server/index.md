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
order: 10
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::server::{HttpHandler, Server};
```

## Types

| Name | Description |
|------|-------------|
| [`Server`](/packages/http/reference/http/server/Server) | A listening HTTP server socket and its TLS settings. |

## Traits

| Name | Description |
|------|-------------|
| [`HttpHandler`](/packages/http/reference/http/server/HttpHandler) | Answers server requests: implement `handle` and pass the value to [`serve`](/packages/http/reference/http/server/serve) (or another serve function). |

## Functions

| Name | Description |
|------|-------------|
| [`serve_once`](/packages/http/reference/http/server/serve_once) | Accepts one connection, answers one HTTP/1.1 request with `handler`, and closes the connection. |
| [`serve_conn_loop`](/packages/http/reference/http/server/serve_conn_loop) | Serves HTTP/1.1 requests on an accepted stream until the client closes, sends `Connection: close`, or sends a malformed request, then closes the stream. |
| [`serve_one_client`](/packages/http/reference/http/server/serve_one_client) | Accepts one connection and serves HTTP/1.1 on it until the client closes or sends `Connection: close`. |
| [`serve`](/packages/http/reference/http/server/serve) | Serves HTTP/1.1 until accepting fails, each connection in its own task. |
| [`h2_serve_conn`](/packages/http/reference/http/server/h2_serve_conn) | Speaks prior-knowledge HTTP/2 on an already accepted stream, answering each finished stream with `handler`, until the client closes or the session ends after `GOAWAY`. |
| [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once) | Accepts one connection and serves every request on it. |
| [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all) | Accepts connections one at a time until accepting fails, serving each as [`h2_serve_once`](/packages/http/reference/http/server/h2_serve_once) does (HTTP/1.1 fallback connections keep alive). |
| [`h2_serve`](/packages/http/reference/http/server/h2_serve) | The TLS form of [`h2_serve_all`](/packages/http/reference/http/server/h2_serve_all): ALPN [`h2`](/packages/http/reference/http/h2) is HTTP/2, anything else HTTP/1.1. |
