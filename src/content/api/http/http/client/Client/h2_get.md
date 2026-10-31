---
slug: "http/http/client/Client/h2_get"
package: "http"
title: "Client::h2_get"
description: "Sends GET url over HTTP/2 (HTTP/1.1 when an https:// server does not select h2)."
module: "http::client"
kind: "method"
name: "h2_get"
parent: "Client"
signature: "pub fn h2_get(string url) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.coil#L279"
order: 7
---

Sends `GET url` over HTTP/2 (HTTP/1.1 when an `https://` server does not select [`h2`](/packages/http/reference/http/h2)).

The first call dials the origin; later calls to the same origin open a new
stream on that connection, and a call to another origin replaces it. Response
header fields and trailers are on the returned `Response`.

Called on a `Client` value as `value.h2_get(…)`.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<Response, HttpError>`

## Examples

```coil
use http::client::Client;
use http::response::header_get;

fn main() {
    let c = Client::new();
    let a = c.h2_get("https://example.com/a");
    let b = c.h2_get("https://example.com/b");
    c.close();
}
```

## See also

- [`http::h2`](/packages/http/reference/http/h2)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send): Sends an already serialized request head plus `body` to `u` and reads one response.
- [`Client::send`](/packages/http/reference/http/client/Client/send): Sends `req` over HTTP/1.1 and returns the response.
- [`Client::get`](/packages/http/reference/http/client/Client/get): Sends `GET url` over HTTP/1.1.
