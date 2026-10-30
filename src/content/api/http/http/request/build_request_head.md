---
slug: "http/http/request/build_request_head"
package: "http"
title: "build_request_head"
description: "Serialize HTTP/1.1 request line + Host + Content-Length + Connection: close."
module: "http::request"
kind: "fn"
name: "build_request_head"
signature: "fn build_request_head(string method, Url u, Headers headers, int body_len) -> Result<Vec<byte>, HttpError>"
import: "use http::request::{build_request_head};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/request.hy#L371"
order: 1
---

Serialize HTTP/1.1 request line + Host + Content-Length + Connection: close.

## Parameters

| Name | Type |
|------|------|
| `method` | `string` |
| `u` | `Url` |
| `headers` | `Headers` |
| `body_len` | `int` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`build_request_head_keepalive`](/packages/http/reference/http/request/build_request_head_keepalive): Same as `build_request_head` but emits Connection: keep-alive.
