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
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/conn.coil#L50"
order: 2
---

1 when the connection can carry another message, otherwise 0.

Called on a `HttpConn` value as `value.can_reuse(…)`.

## Returns

`int`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A socket plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap): Wraps an open stream with no buffered bytes.
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream): The underlying stream, for writing.
