---
slug: "http/http/response/http_framed_end"
package: "http"
title: "http_framed_end"
description: "The end offset (exclusive) of the first complete HTTP/1.1 message in raw."
module: "http::response"
kind: "fn"
name: "http_framed_end"
signature: "fn http_framed_end(Vec<byte> raw) -> Result<int, HttpError>"
import: "use http::response::{http_framed_end};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L517"
order: 5
---

The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.

The message is framed by `Transfer-Encoding: chunked`, by `Content-Length`, or
ends at the blank line when it has neither. Bytes after the offset belong to
the next message. Returns `Protocol` when `raw` holds no complete message.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<int, HttpError>`

## See also

- [`header_get`](/packages/http/reference/http/response/header_get): The value of the first header field of `r` named exactly `name`, or `""`.
- [`trailer_get`](/packages/http/reference/http/response/trailer_get): The value of the first trailing field of `r` named exactly `name`, or `""`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parses a complete HTTP/1.1 response (head and body) into a `Response`.
