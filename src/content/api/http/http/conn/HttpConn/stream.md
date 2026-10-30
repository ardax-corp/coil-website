---
slug: "http/http/conn/HttpConn/stream"
package: "http"
title: "HttpConn::stream"
description: "Method HttpConn::stream."
module: "http::conn"
kind: "method"
name: "stream"
parent: "HttpConn"
signature: "pub fn stream() -> Stream"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L33"
order: 1
---

*No documentation yet.*

Called on a `HttpConn` value as `value.stream(…)`.

## Returns

`Stream`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): Stream plus bytes pulled past the current message (keep-alive / pipelining).
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap)
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse)
