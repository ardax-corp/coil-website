---
slug: "http/http/response/encode_chunked_body"
package: "http"
title: "encode_chunked_body"
description: "Encode body as one chunk plus a terminating zero chunk."
module: "http::response"
kind: "fn"
name: "encode_chunked_body"
signature: "fn encode_chunked_body(Vec<byte> body) -> Result<Vec<byte>, HttpError>"
import: "use http::response::{encode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/response.hy#L399"
order: 3
---

Encode `body` as one chunk plus a terminating zero chunk.

## Parameters

| Name | Type |
|------|------|
| `body` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`decode_chunked_into`](/packages/http/reference/http/response/decode_chunked_into): Parse chunked `raw` into `out`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decode a chunked body (no headers).
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): Exclusive end index of the first HTTP/1.1 message in `raw` (headers + Content-Length or chunked body).
- [`header_block_body_len`](/packages/http/reference/http/response/header_block_body_len): Body length from a header block (no trailing CRLFCRLF required).
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parse raw HTTP/1.1 response bytes into `Response`.
