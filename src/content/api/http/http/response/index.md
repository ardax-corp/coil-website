---
slug: "http/http/response/index"
package: "http"
title: "http::response"
description: "Parsing and building HTTP/1.1 responses."
module: "http::response"
kind: "module"
name: "http::response"
origin: "package"
auto: false
order: 9
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::response::{Response, header_get};
```

## Types

| Name | Description |
|------|-------------|
| [`Response`](/packages/http/reference/http/response/Response) | An HTTP response: status, header fields, body and HTTP/2 trailing fields. |

## Functions

| Name | Description |
|------|-------------|
| [`header_get`](/packages/http/reference/http/response/header_get) | The value of the first header field of `r` named exactly `name`, or `""`. |
| [`trailer_get`](/packages/http/reference/http/response/trailer_get) | The value of the first trailing field of `r` named exactly `name`, or `""`. |
| [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body) | Decodes an HTTP/1.1 chunked body (no head) into its bytes. |
| [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body) | Encodes `body` as one chunk followed by the terminating zero-size chunk. |
| [`http_framed_end`](/packages/http/reference/http/response/http_framed_end) | The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`. |
| [`parse_response`](/packages/http/reference/http/response/parse_response) | Parses a complete HTTP/1.1 response (head and body) into a [`Response`](/packages/http/reference/http/response/Response). |
