---
slug: "http/http/conn/HttpConn/wrap"
package: "http"
title: "HttpConn::wrap"
description: "Wraps an open connection with no buffered bytes."
module: "http::conn"
kind: "static method"
name: "wrap"
parent: "HttpConn"
signature: "pub static fn wrap(Conn s) -> HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L122"
order: 0
---

Wraps an open connection with no buffered bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `Conn` |

## Returns

`HttpConn`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A connection plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream): The underlying connection, for writing.
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse): 1 when the connection can carry another message, otherwise 0.
