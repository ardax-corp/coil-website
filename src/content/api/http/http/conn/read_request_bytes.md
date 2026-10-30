---
slug: "http/http/conn/read_request_bytes"
package: "http"
title: "read_request_bytes"
description: "Read a full request or response message from a raw stream (no leftover yet)."
module: "http::conn"
kind: "fn"
name: "read_request_bytes"
signature: "fn read_request_bytes(Stream s) -> Result<Vec<byte>, HttpError>"
import: "use http::conn::{read_request_bytes};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L297"
order: 2
---

Read a full request or response message from a raw stream (no leftover yet).

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Vec<byte>, HttpError>`

## See also

- [`read_http_message`](/packages/http/reference/http/conn/read_http_message): Read until CRLFCRLF, then exactly Content-Length body bytes.
