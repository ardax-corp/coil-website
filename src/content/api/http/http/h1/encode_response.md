---
slug: "http/http/h1/encode_response"
package: "http"
title: "encode_response"
description: "Encode response status line + headers + body for the wire."
module: "http::h1"
kind: "fn"
name: "encode_response"
signature: "fn encode_response(Response r) -> Vec<byte>"
import: "use http::h1::{encode_response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h1.hy#L257"
order: 2
---

Encode response status line + headers + body for the wire.

## Parameters

| Name | Type |
|------|------|
| `r` | `Response` |

## Returns

`Vec<byte>`

## See also

- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parse raw HTTP/1.1 request bytes (head + body) into `IncomingRequest`.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decode HTTP/1.1 chunked body bytes (hex sizes, last chunk `0`, trailers skipped).
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encode `body` as a single chunk plus a terminating zero chunk.
