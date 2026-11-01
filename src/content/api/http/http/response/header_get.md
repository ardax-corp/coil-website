---
slug: "http/http/response/header_get"
package: "http"
title: "header_get"
description: "The value of the first header field of r named exactly name, or \"\"."
module: "http::response"
kind: "fn"
name: "header_get"
signature: "fn header_get(Response r, string name) -> string"
import: "use http::response::{header_get};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/response.coil#L151"
order: 1
---

The value of the first header field of `r` named exactly `name`, or `""`.

The name comparison is case-sensitive: use the case the peer sent.

## Parameters

| Name | Type |
|------|------|
| `r` | `Response` |
| `name` | `string` |

## Returns

`string`

## Examples

```coil
use tests::assert;
use http::response::{header_get, parse_response};
use string::to_bytes;

let raw = to_bytes("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 2\r\n\r\nhi");
let r = match parse_response(raw) {
    Result::Ok(r) => r,
    Result::Err(e) => panic show(e),
};
assert!(header_get(r, "Content-Type") == "text/plain");
assert!(header_get(r, "X-Missing") == "");
```

## See also

- [`trailer_get`](/packages/http/reference/http/response/trailer_get): The value of the first trailing field of `r` named exactly `name`, or `""`.
- [`decode_chunked_body`](/packages/http/reference/http/response/decode_chunked_body): Decodes an HTTP/1.1 chunked body (no head) into its bytes.
- [`encode_chunked_body`](/packages/http/reference/http/response/encode_chunked_body): Encodes `body` as one chunk followed by the terminating zero-size chunk.
- [`http_framed_end`](/packages/http/reference/http/response/http_framed_end): The end offset (exclusive) of the first complete HTTP/1.1 message in `raw`.
- [`parse_response`](/packages/http/reference/http/response/parse_response): Parses a complete HTTP/1.1 response (head and body) into a `Response`.
