---
slug: "http/http/response/http_framed_end"
package: "http"
title: "http_framed_end"
description: "Exclusive end index of the first HTTP/1.1 message in raw (headers + Content-Length or chunked body)."
module: "http::response"
kind: "fn"
name: "http_framed_end"
signature: "fn http_framed_end(Vec<byte> raw) -> Result<int, HttpError>"
import: "use http::response::{http_framed_end};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L433"
order: 4
---

Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body).

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<int, HttpError>`

## See also

- [`decode_chunked_into`](/packages/http/reference/http/response/decode_chunked_into): Parse chunked `raw` into `out`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decode a chunked body (no headers).
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encode `body` as one chunk plus a terminating zero chunk.
- [`header_block_body_len`](/packages/http/reference/http/response/header_block_body_len): Body length from a header block (no trailing CRLFCRLF required).
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parse raw HTTP/1.1 response bytes into `Response`.
