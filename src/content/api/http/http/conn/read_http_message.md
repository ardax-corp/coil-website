---
slug: "http/http/conn/read_http_message"
package: "http"
title: "read_http_message"
description: "Read until CRLFCRLF, then exactly Content-Length body bytes. Extra bytes stay on c."
module: "http::conn"
kind: "fn"
name: "read_http_message"
signature: "fn read_http_message(HttpConn c) -> Result<Vec<byte>, HttpError>"
import: "use http::conn::{read_http_message};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L202"
order: 1
---

Read until CRLFCRLF, then exactly Content-Length body bytes. Extra bytes stay on `c`.

## Parameters

| Name | Type |
|------|------|
| `c` | `HttpConn` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`read_request_bytes`](/packages/http/reference/http/conn/read_request_bytes): Read a full request or response message from a raw stream (no leftover yet).
