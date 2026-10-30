---
slug: "http/http/client/Client/h2_send"
package: "http"
title: "Client::h2_send"
description: "HTTP/2 request using the same builder fields as send."
module: "http::client"
kind: "method"
name: "h2_send"
parent: "Client"
signature: "pub fn h2_send(Request req) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/client.hy#L173"
order: 9
---

HTTP/2 request using the same builder fields as [`send`](/packages/http/reference/http/client/Client/send).

Called on a `Client` value as `value.h2_send(…)`.

## Parameters

| Name | Type |
|------|------|
| `req` | `Request` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client`](/packages/http/reference/http/client/Client)
- [`Client::new`](/packages/http/reference/http/client/Client/new)
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool)
- [`Client::close`](/packages/http/reference/http/client/Client/close)
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send)
- [`Client::get`](/packages/http/reference/http/client/Client/get)
- [`Client::post`](/packages/http/reference/http/client/Client/post)
