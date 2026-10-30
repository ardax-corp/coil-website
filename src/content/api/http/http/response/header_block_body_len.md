---
slug: "http/http/response/header_block_body_len"
package: "http"
title: "header_block_body_len"
description: "Body length from a header block (no trailing CRLFCRLF required). 999999 = no Content-Length (empty body for keep-alive). 999998 = chunked (not framed here)."
module: "http::response"
kind: "fn"
name: "header_block_body_len"
signature: "fn header_block_body_len(Vec<byte> header_bytes) -> Result<int, HttpError>"
import: "use http::response::{header_block_body_len};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L461"
order: 5
---

Body length from a header block (no trailing CRLFCRLF required). `999999` = no Content-Length (empty body for keep-alive). `999998` = chunked (not framed here).

## Parameters

| Name | Type |
|------|------|
| `header_bytes` | `Vec<byte>` |

## Returns

`Result<int, HttpError>`

## See also

- [`decode_chunked_into`](/packages/http/reference/http/response/decode_chunked_into): Parse chunked `raw` into `out`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decode a chunked body (no headers).
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encode `body` as one chunk plus a terminating zero chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body).
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parse raw HTTP/1.1 response bytes into `Response`.
