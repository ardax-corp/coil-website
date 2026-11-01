---
slug: "http/http/h1/decode_chunked_body"
package: "http"
title: "decode_chunked_body"
description: "Decodes an HTTP/1.1 chunked body (no head) into its bytes."
module: "http::h1"
kind: "fn"
name: "decode_chunked_body"
signature: "fn decode_chunked_body(Vec<byte> raw) -> Result<Vec<byte>, HttpError>"
import: "use http::h1::{decode_chunked_body};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/h1.coil#L365"
order: 4
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

## Examples

```coil
use tests::assert;
use http::h1::{decode_chunked_body, encode_chunked_body};
use string::to_bytes;

let wire = match encode_chunked_body(to_bytes("hello")) {
    Result::Ok(b) => b,
    Result::Err(e) => panic show(e),
};
let back = match decode_chunked_body(wire) {
    Result::Ok(b) => b,
    Result::Err(e) => panic show(e),
};
assert!(back.len() == 5);
```

## See also

- [`parse_request`](/packages/http/reference/http/h1/parse_request): Parses a complete HTTP/1.1 request (head and body) into an `IncomingRequest`.
- [`encode_response`](/packages/http/reference/http/h1/encode_response): Serializes `r` for HTTP/1.1 with `Connection: close`.
- [`encode_response_keepalive`](/packages/http/reference/http/h1/encode_response_keepalive): Same as `encode_response`, with `Connection: keep-alive`.
- [`encode_chunked_body`](/packages/http/reference/http/h1/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
