---
slug: "http/http/request/build_request_head_keepalive"
package: "http"
title: "build_request_head_keepalive"
description: "Same as build_request_head, with Connection: keep-alive."
module: "http::request"
kind: "fn"
name: "build_request_head_keepalive"
signature: "fn build_request_head_keepalive(string method, Url u, Headers headers, int body_len) -> Result<Vec<byte>, HttpError>"
import: "use http::request::{build_request_head_keepalive};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/request.hy#L464"
order: 2
---

Same as [`build_request_head`](/packages/http/reference/http/request/build_request_head), with `Connection: keep-alive`.

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

- [`http::request::build_request_head`](/packages/http/reference/http/request/build_request_head)
