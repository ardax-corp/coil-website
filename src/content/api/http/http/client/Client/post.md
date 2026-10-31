---
slug: "http/http/client/Client/post"
package: "http"
title: "Client::post"
description: "Sends POST url with body over HTTP/1.1. Errors are as for send."
module: "http::client"
kind: "method"
name: "post"
parent: "Client"
signature: "pub fn post(string url, Vec<byte> body) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.hy#L251"
order: 6
---

Sends `POST url` with `body` over HTTP/1.1. Errors are as for [`send`](/packages/http/reference/http/client/Client/send).

Called on a `Client` value as `value.post(…)`.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `body` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send): Sends an already serialized request head plus `body` to `u` and reads one response.
- [`Client::get`](/packages/http/reference/http/client/Client/get): Sends `GET url` over HTTP/1.1.
- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get): Sends `GET url` over HTTP/2 (HTTP/1.1 when an `https://` server does not select `h2`).
