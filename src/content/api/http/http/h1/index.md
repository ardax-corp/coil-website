---
slug: "http/http/h1/index"
package: "http"
title: "http::h1"
description: "HTTP/1.1 wire helpers shared by the client and the server."
module: "http::h1"
kind: "module"
name: "http::h1"
origin: "package"
auto: false
order: 2
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::h1::{IncomingRequest, parse_request};
```

## Types

| Name | Description |
|------|-------------|
| [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest) | A request received by the server, as passed to `HttpHandler::handle`. |

## Functions

| Name | Description |
|------|-------------|
| [`parse_request`](/packages/http/reference/http/h1/parse_request) | Parses a complete HTTP/1.1 request (head and body) into an [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest). |
| [`encode_response`](/packages/http/reference/http/h1/encode_response) | Serializes `r` for HTTP/1.1 with `Connection: close`. |
| [`encode_response_keepalive`](/packages/http/reference/http/h1/encode_response_keepalive) | Same as [`encode_response`](/packages/http/reference/http/h1/encode_response), with `Connection: keep-alive`. |
| [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body) | Decodes an HTTP/1.1 chunked body (no head) into its bytes. |
| [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body) | Encodes `body` as one chunk followed by the terminating zero-size chunk. |
