---
slug: "http/http/response/encode_chunked_body"
package: "http"
title: "encode_chunked_body"
description: "Encodes body as one chunk followed by the terminating zero-size chunk."
module: "http::response"
kind: "fn"
name: "encode_chunked_body"
signature: "fn encode_chunked_body(Vec<byte> body) -> Result<Vec<byte>, HttpError>"
import: "use http::response::{encode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L479"
order: 4
---

Encodes `body` as one chunk followed by the terminating zero-size chunk.

## Parameters

| Name | Type |
|------|------|
| `body` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`header_get`](/packages/http/reference/http/response/header_get): The value of the first header field of `r` named exactly `name`, or `""`.
- [`trailer_get`](/packages/http/reference/http/response/trailer_get): The value of the first trailing field of `r` named exactly `name`, or `""`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parses a complete HTTP/1.1 response (head and body) into a `Response`.
