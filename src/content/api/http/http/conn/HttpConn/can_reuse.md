---
slug: "http/http/conn/HttpConn/can_reuse"
package: "http"
title: "HttpConn::can_reuse"
description: "1 when the connection can carry another message, otherwise 0."
module: "http::conn"
kind: "method"
name: "can_reuse"
parent: "HttpConn"
signature: "pub fn can_reuse() -> int"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L133"
order: 2
---

1 when the connection can carry another message, otherwise 0.

Called on a `HttpConn` value as `value.can_reuse(…)`.

## Returns

`int`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A connection plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap): Wraps an open connection with no buffered bytes.
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream): The underlying connection, for writing.
