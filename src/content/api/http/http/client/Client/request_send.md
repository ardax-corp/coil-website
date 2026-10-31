---
slug: "http/http/client/Client/request_send"
package: "http"
title: "Client::request_send"
description: "Sends an already serialized request head plus body to u and reads one response."
module: "http::client"
kind: "method"
name: "request_send"
parent: "Client"
signature: "pub fn request_send(Vec<byte> head, Url u, Vec<byte> body) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/client.hy#L117"
order: 3
---

Sends an already serialized request head plus `body` to `u` and reads one response.

Low-level: `head` must be a complete HTTP/1.1 head (see `build_request_head`).
Prefer [`send`](/packages/http/reference/http/client/Client/send). The connection goes back to the pool when pooling is on and the
response was framed; on any error it is closed.

Called on a `Client` value as `value.request_send(…)`.

## Parameters

| Name | Type |
|------|------|
| `head` | `Vec<byte>` |
| `u` | `Url` |
| `body` | `Vec<byte>` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client`](/packages/http/reference/http/client/Client): An HTTP client for `http://` and `https://` URLs.
- [`Client::new`](/packages/http/reference/http/client/Client/new): A client with HTTP/1.1 connection pooling on and no open connections.
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool): Turns pooling off: later requests send `Connection: close` and close their connection after the response.
- [`Client::close`](/packages/http/reference/http/client/Client/close): Closes every pooled HTTP/1.1 connection and the HTTP/2 session.
- [`Client::get`](/packages/http/reference/http/client/Client/get): Sends `GET url` over HTTP/1.1.
- [`Client::post`](/packages/http/reference/http/client/Client/post): Sends `POST url` with `body` over HTTP/1.1.
- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get): Sends `GET url` over HTTP/2 (HTTP/1.1 when an `https://` server does not select `h2`).
