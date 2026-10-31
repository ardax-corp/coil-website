---
slug: "http/http/response/trailer_get"
package: "http"
title: "trailer_get"
description: "The value of the first trailing field of r named exactly name, or \"\". Trailers arrive on HTTP/2 only."
module: "http::response"
kind: "fn"
name: "trailer_get"
signature: "fn trailer_get(Response r, string name) -> string"
import: "use http::response::{trailer_get};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L164"
order: 2
---

The value of the first trailing field of `r` named exactly `name`, or `""`. Trailers arrive on HTTP/2 only.

## Parameters

| Name | Type |
|------|------|
| `r` | `Response` |
| `name` | `string` |

## Returns

`string`

## See also

- [`header_get`](/packages/http/reference/http/response/header_get): The value of the first header field of `r` named exactly `name`, or `""`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parses a complete HTTP/1.1 response (head and body) into a `Response`.
