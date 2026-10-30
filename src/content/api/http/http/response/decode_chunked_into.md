---
slug: "http/http/response/decode_chunked_into"
package: "http"
title: "decode_chunked_into"
description: "Parse chunked raw into out. Returns byte count consumed, including the last chunk and trailers."
module: "http::response"
kind: "fn"
name: "decode_chunked_into"
signature: "fn decode_chunked_into(Vec<byte> raw, Vec<byte> out) -> Result<int, HttpError>"
import: "use http::response::{decode_chunked_into};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L344"
order: 1
---

Parse chunked `raw` into `out`. Returns byte count consumed, including the last chunk and trailers.

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |
| `out` | `Vec<byte>` |

## Returns

`Result<int, HttpError>`

## See also

- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decode a chunked body (no headers).
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encode `body` as one chunk plus a terminating zero chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body).
- [`header_block_body_len`](/packages/http/reference/http/response/header_block_body_len): Body length from a header block (no trailing CRLFCRLF required).
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parse raw HTTP/1.1 response bytes into `Response`.
