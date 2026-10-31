---
slug: "http/http/client/Client/get"
package: "http"
title: "Client::get"
description: "Sends GET url over HTTP/1.1. Errors are as for send."
module: "http::client"
kind: "method"
name: "get"
parent: "Client"
signature: "pub fn get(string url) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.coil#L243"
order: 5
---

Sends `GET url` over HTTP/1.1. Errors are as for [`send`](/packages/http/reference/http/client/Client/send).

Called on a `Client` value as `value.get(…)`.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<Response, HttpError>`

## Examples

```coil
use http::client::Client;
use http::url::HttpError;
use io::IoError;

fn main() {
    let c = Client::new();
    match c.get("http://example.com/") {
        Result::Ok(r) => r.status,
        Result::Err(HttpError::Io(IoError::TimedOut)) => 0,
        Result::Err(e) => panic show(e),
    };
}
```

## See also

- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send): Sends an already serialized request head plus `body` to `u` and reads one response.
- [`Client::post`](/packages/http/reference/http/client/Client/post): Sends `POST url` with `body` over HTTP/1.1.
- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get): Sends `GET url` over HTTP/2 (HTTP/1.1 when an `https://` server does not select `h2`).
