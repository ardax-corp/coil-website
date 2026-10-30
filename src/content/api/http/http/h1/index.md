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
| [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest) | Parsed inbound HTTP/1.1 request (server side). |

## Functions

| Name | Description |
|------|-------------|
| [`parse_request`](/packages/http/reference/http/h1/parse_request) | Parse raw HTTP/1.1 request bytes (head + body) into [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest). |
| [`encode_response`](/packages/http/reference/http/h1/encode_response) | Encode response status line + headers + body for the wire. |
| [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body) | Decode HTTP/1.1 chunked body bytes (hex sizes, last chunk `0`, trailers skipped). |
| [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body) | Encode `body` as a single chunk plus a terminating zero chunk. |
