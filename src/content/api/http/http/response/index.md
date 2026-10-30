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
order: 7
---

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

Import what you use (`use path::*` is not allowed):

```coil
use http::response::{Response, decode_chunked_into};
```

## Types

| Name | Description |
|------|-------------|
| [`Response`](/packages/http/reference/http/response/Response) | Parsed HTTP response (status, headers, body, optional trailing fields). |

## Functions

| Name | Description |
|------|-------------|
| [`decode_chunked_into`](/packages/http/reference/http/response/decode_chunked_into) | Parse chunked `raw` into `out`. |
| [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body) | Decode a chunked body (no headers). |
| [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body) | Encode `body` as one chunk plus a terminating zero chunk. |
| [`http_framed_end`](/packages/http/reference/http/response/http_framed_end) | Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body). |
| [`header_block_body_len`](/packages/http/reference/http/response/header_block_body_len) | Body length from a header block (no trailing CRLFCRLF required). |
| [`parse_response`](/packages/http/reference/http/response/parse_response) | Parse raw HTTP/1.1 response bytes into [`Response`](/packages/http/reference/http/response/Response). |
