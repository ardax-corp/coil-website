---
slug: "http/http/response/decode_chunked_body"
package: "http"
title: "decode_chunked_body"
description: "Decodes an HTTP/1.1 chunked body (no head) into its bytes."
module: "http::response"
kind: "fn"
name: "decode_chunked_body"
signature: "fn decode_chunked_body(Vec<byte> raw) -> Result<Vec<byte>, HttpError>"
import: "use http::response::{decode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.coil#L472"
order: 3
---

Decodes an HTTP/1.1 chunked body (no head) into its bytes.

Chunk extensions and trailer fields are skipped. Returns `Protocol` when the
input is truncated or a chunk size is not hex.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`header_get`](/packages/http/reference/http/response/header_get): The value of the first header field of `r` named exactly `name`, or `""`.
- [`trailer_get`](/packages/http/reference/http/response/trailer_get): The value of the first trailing field of `r` named exactly `name`, or `""`.
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parses a complete HTTP/1.1 response (head and body) into a `Response`.
