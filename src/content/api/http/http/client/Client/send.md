---
slug: "http/http/client/Client/send"
package: "http"
title: "Client::send"
description: "Method Client::send."
module: "http::client"
kind: "method"
name: "send"
parent: "Client"
signature: "pub fn send(Request req) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/client.hy#L99"
order: 4
---

*No documentation yet.*

Called on a `Client` value as `value.send(…)`.

## Parameters

| Name | Type |
|------|------|
| `req` | `Request` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client`](/packages/http/reference/http/client/Client)
- [`Client::new`](/packages/http/reference/http/client/Client/new)
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool)
- [`Client::close`](/packages/http/reference/http/client/Client/close)
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send)
- [`Client::get`](/packages/http/reference/http/client/Client/get)
- [`Client::post`](/packages/http/reference/http/client/Client/post)
- [`Client::h2_get`](/packages/http/reference/http/client/Client/h2_get): HTTP/2 GET.
