---
slug: "http/http/conn/HttpConn/stream"
package: "http"
title: "HttpConn::stream"
description: "The underlying stream, for writing."
module: "http::conn"
kind: "method"
name: "stream"
parent: "HttpConn"
signature: "pub fn stream() -> Stream"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5b91a79d1460e4bb06d99db02a2a90ab6b76533f/src/http/conn.coil#L45"
order: 1
---

The underlying stream, for writing.

Called on a `HttpConn` value as `value.stream(…)`.

## Returns

`Stream`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): A socket plus the bytes read past the current HTTP/1.1 message.
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap): Wraps an open stream with no buffered bytes.
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse): 1 when the connection can carry another message, otherwise 0.
