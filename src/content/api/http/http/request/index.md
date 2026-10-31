---
slug: "http/http/request/index"
package: "http"
title: "http::request"
description: "Request builders and the client-side Request type."
module: "http::request"
kind: "module"
name: "http::request"
origin: "package"
auto: false
order: 8
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::request::{Request, build_request_head};
```

## Types

| Name | Description |
|------|-------------|
| [`Request`](/packages/http/reference/http/request/Request) | An outbound HTTP request: method, URL, extra header fields and body. |

## Functions

| Name | Description |
|------|-------------|
| [`build_request_head`](/packages/http/reference/http/request/build_request_head) | Serializes an HTTP/1.1 request head with `Connection: close`. |
| [`build_request_head_keepalive`](/packages/http/reference/http/request/build_request_head_keepalive) | Same as [`build_request_head`](/packages/http/reference/http/request/build_request_head), with `Connection: keep-alive`. |
