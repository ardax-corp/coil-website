---
slug: "http/http/response/parse_response"
package: "http"
title: "parse_response"
description: "Parse raw HTTP/1.1 response bytes into Response."
module: "http::response"
kind: "fn"
name: "parse_response"
signature: "fn parse_response(Vec<byte> raw) -> Result<Response, HttpError>"
import: "use http::response::{parse_response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L472"
order: 6
---

Parse raw HTTP/1.1 response bytes into [`Response`](/packages/http/reference/http/response/Response).

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## See also

- [`http::response::Response`](/packages/http/reference/http/response/Response)
- [`decode_chunked_into`](/packages/http/reference/http/response/decode_chunked_into): Parse chunked `raw` into `out`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decode a chunked body (no headers).
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encode `body` as one chunk plus a terminating zero chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body).
- [`header_block_body_len`](/packages/http/reference/http/response/header_block_body_len): Body length from a header block (no trailing CRLFCRLF required).
