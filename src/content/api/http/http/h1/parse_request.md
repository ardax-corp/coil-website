---
slug: "http/http/h1/parse_request"
package: "http"
title: "parse_request"
description: "Parse raw HTTP/1.1 request bytes (head + body) into IncomingRequest."
module: "http::h1"
kind: "fn"
name: "parse_request"
signature: "fn parse_request(Vec<byte> raw) -> Result<IncomingRequest, HttpError>"
import: "use http::h1::{parse_request};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h1.hy#L75"
order: 1
---

Parse raw HTTP/1.1 request bytes (head + body) into [`IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest).

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<IncomingRequest, HttpError>`

## See also

- [`http::h1::IncomingRequest`](/packages/http/reference/http/h1/IncomingRequest)
- [`encode_response`](/packages/http/reference/http/h1/encode_response): Encode response status line + headers + body for the wire.
- [`decode_chunked_body`](/packages/http/reference/http/h1/decode_chunked_body): Decode HTTP/1.1 chunked body bytes (hex sizes, last chunk `0`, trailers skipped).
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encode `body` as a single chunk plus a terminating zero chunk.
