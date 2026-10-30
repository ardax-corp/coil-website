---
slug: "http/http/conn/HttpConn/can_reuse"
package: "http"
title: "HttpConn::can_reuse"
description: "Method HttpConn::can_reuse."
module: "http::conn"
kind: "method"
name: "can_reuse"
parent: "HttpConn"
signature: "pub fn can_reuse() -> int"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L37"
order: 2
---

*No documentation yet.*

Called on a `HttpConn` value as `value.can_reuse(…)`.

## Returns

`int`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): Stream plus bytes pulled past the current message (keep-alive / pipelining).
- [`HttpConn::wrap`](/packages/http/reference/http/conn/HttpConn/wrap)
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream)
