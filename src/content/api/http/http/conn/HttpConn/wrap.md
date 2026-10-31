---
slug: "http/http/conn/HttpConn/wrap"
package: "http"
title: "HttpConn::wrap"
description: "Wraps an open stream with no buffered bytes."
module: "http::conn"
kind: "static method"
name: "wrap"
parent: "HttpConn"
signature: "pub static fn wrap(Stream s) -> HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/conn.hy#L39"
order: 0
---

Wraps an open stream with no buffered bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`HttpConn`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A socket plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream): The underlying stream, for writing.
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse): 1 when the connection can carry another message, otherwise 0.
