---
slug: "http/http/client/Client/h2_get"
package: "http"
title: "Client::h2_get"
description: "HTTP/2 GET. Cleartext sends the connection preface. HTTPS uses ALPN. Repeated calls on this client reuse one connection with new stream ids."
module: "http::client"
kind: "method"
name: "h2_get"
parent: "Client"
signature: "pub fn h2_get(string url) -> Result<Response, HttpError>"
import: "use http::client::{Client};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/client.hy#L160"
order: 7
---

HTTP/2 GET. Cleartext sends the connection preface. HTTPS uses ALPN. Repeated calls on this client reuse one connection with new stream ids.

Called on a `Client` value as `value.h2_get(…)`.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |

## Returns

`Result<Response, HttpError>`

## See also

- [`Client`](/packages/http/reference/http/client/Client)
- [`Client::new`](/packages/http/reference/http/client/Client/new)
- [`Client::no_pool`](/packages/http/reference/http/client/Client/no_pool)
- [`Client::close`](/packages/http/reference/http/client/Client/close)
- [`Client::request_send`](/packages/http/reference/http/client/Client/request_send)
- [`Client::send`](/packages/http/reference/http/client/Client/send)
- [`Client::get`](/packages/http/reference/http/client/Client/get)
- [`Client::post`](/packages/http/reference/http/client/Client/post)
