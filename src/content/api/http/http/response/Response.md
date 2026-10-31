---
slug: "http/http/response/Response"
package: "http"
title: "Response"
description: "An HTTP response: status, header fields, body and HTTP/2 trailing fields."
module: "http::response"
kind: "class"
name: "Response"
signature: "class Response"
import: "use http::response::{Response};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/response.hy#L54"
order: 0
---

An HTTP response: status, header fields, body and HTTP/2 trailing fields.

The client returns one for every request (`Client::get`, `send`, `h2_get`, ...).
A server's `HttpHandler::handle` builds one with [`Response::ok`](/packages/http/reference/http/response/Response/ok) and the setter
methods. Header fields are kept in order with the case they were received or
added with; look one up with [`header_get`](/packages/http/reference/http/response/header_get).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | `int` | Status code, such as 200 or 404. |
| `header_names` | `Vec<string>` | Header field names, in order. |
| `header_values` | `Vec<string>` | Header field values; `header_values[i]` belongs to `header_names[i]`. |
| `body` | `Vec<byte>` | Body bytes, already de-chunked. |
| `trailer_names` | `Vec<string>` | Trailing field names (HTTP/2 only; empty on HTTP/1.1). |
| `trailer_values` | `Vec<string>` | Trailing field values; `trailer_values[i]` belongs to `trailer_names[i]`. |

## Associated functions

| Name | Description |
|------|-------------|
| [`ok`](/packages/http/reference/http/response/Response/ok) | A `200` response with no header fields and an empty body. |

## Methods

| Name | Description |
|------|-------------|
| [`status`](/packages/http/reference/http/response/Response/status) | Sets the status code. |
| [`header`](/packages/http/reference/http/response/Response/header) | Appends a header field. |
| [`body`](/packages/http/reference/http/response/Response/body) | Sets the body. |
| [`trailer`](/packages/http/reference/http/response/Response/trailer) | Appends a trailing field, sent after the body on HTTP/2. |

## Examples

Building a response in a handler:

```coil
use tests::assert;
use http::response::{Response, header_get};
use string::to_bytes;

let r = Response::ok();
r.status(201);
r.header("Content-Type", "text/plain");
r.body(to_bytes("created"));
assert!(r.status == 201);
assert!(header_get(r, "Content-Type") == "text/plain");
assert!(r.body.len() == 7);
```

Reading one the client returned:

```coil
use http::client::Client;
use http::response::header_get;
use string::from_bytes;

fn main() {
    let c = Client::new();
    let r = match c.get("http://example.com/") {
        Result::Ok(r) => r,
        Result::Err(e) => panic show(e),
    };
    let kind = header_get(r, "Content-Type");
    let text = from_bytes(r.body);
}
```

## See also

- [`Response::ok`](/packages/http/reference/http/response/Response/ok)
- [`http::response::header_get`](/packages/http/reference/http/response/header_get)
