---
slug: "http/http/client/Client/h2_send"
package: "http"
title: "Client::h2_send"
description: "Sends req over HTTP/2, like h2_get, with its method, header fields and body."
module: "http::client"
kind: "method"
name: "h2_send"
parent: "Client"
signature: "pub fn h2_send(Request req) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.coil#L292"
order: 9
---

Sends `req` over HTTP/2, like [`h2_get`](/packages/http/reference/http/client/Client/h2_get), with its method, header fields and body.

Called on a `Client` value as `value.h2_send(…)`.

## Parameters

| Name | Type |
|------|------|
| `req` | `Request` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send): Sends an already serialized request head plus `body` to `u` and reads one response.
- [`Client::send`](/packages/http/reference/http/client/Client/send): Sends `req` over HTTP/1.1 and returns the response.
- [`Client::get`](/packages/http/reference/http/client/Client/get): Sends `GET url` over HTTP/1.1.
