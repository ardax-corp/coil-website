---
slug: "http/http/h1/decode_chunked_body"
package: "http"
title: "decode_chunked_body"
description: "Decode HTTP/1.1 chunked body bytes (hex sizes, last chunk 0, trailers skipped)."
module: "http::h1"
kind: "fn"
name: "decode_chunked_body"
signature: "fn decode_chunked_body(Vec<byte> raw) -> Result<Vec<byte>, HttpError>"
import: "use http::h1::{decode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/h1.hy#L284"
order: 3
---

Decode HTTP/1.1 chunked body bytes (hex sizes, last chunk `0`, trailers skipped).

## Parameters

| Name | Type |
|------|------|
| `raw` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parse raw HTTP/1.1 request bytes (head + body) into `IncomingRequest`.
- [`encode_response`](/packages/http/reference/http/h1/encode_response): Encode response status line + headers + body for the wire.
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encode `body` as a single chunk plus a terminating zero chunk.
