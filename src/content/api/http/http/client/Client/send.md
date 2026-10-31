---
slug: "http/http/client/Client/send"
package: "http"
title: "Client::send"
description: "Sends req over HTTP/1.1 and returns the response."
module: "http::client"
kind: "method"
name: "send"
parent: "Client"
signature: "pub fn send(Request req) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.coil#L181"
order: 4
---

Sends `req` over HTTP/1.1 and returns the response.

Returns `BadUrl` when the URL or method does not parse or holds CR / LF,
`InvalidHeader` for CR / LF in a header field, `UnsupportedScheme` for anything
but [`http`](/packages/http/reference/http) and `https`, `Io` / `Tls` when connecting or the socket fails, and
`Protocol` when the response is malformed.

Called on a `Client` value as `value.send(…)`.

## Parameters

| Name | Type |
|------|------|
| `req` | `Request` |

## Returns

`Result<Response, HttpError>`

## Examples

```coil
use http::client::Client;
use http::request::Request;
use string::to_bytes;

fn main() {
    let c = Client::new();
    let req = Request::new();
    req.method("PUT");
    req.url("http://127.0.0.1:8080/items/1");
    req.header("Content-Type", "application/json");
    req.body(to_bytes("{}"));
    match c.send(req) {
        Result::Ok(r) => r.status,
        Result::Err(e) => panic show(e),
    };
}
```

## See also

- [`http`](/packages/http/reference/http)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send): Sends an already serialized request head plus `body` to `u` and reads one response.
- [`Client::get`](/packages/http/reference/http/client/Client/get): Sends `GET url` over HTTP/1.1.
- [`Client::post`](/packages/http/reference/http/client/Client/post): Sends `POST url` with `body` over HTTP/1.1.
