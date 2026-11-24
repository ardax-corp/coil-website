---
slug: "http/http/conn/HttpConn/stream"
package: "http"
title: "HttpConn::stream"
description: "The underlying connection, for writing."
module: "http::conn"
kind: "method"
name: "stream"
parent: "HttpConn"
signature: "pub fn stream() -> Conn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/ff451cfa7e0dc940487a1ab88a8e84412cc71127/src/http/conn.coil#L128"
order: 1
---

The underlying connection, for writing.

Called on a `HttpConn` value as `value.stream(…)`.

## Returns

`Conn`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A connection plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap): Wraps an open connection with no buffered bytes.
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse): 1 when the connection can carry another message, otherwise 0.
