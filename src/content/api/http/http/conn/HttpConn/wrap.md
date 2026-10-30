---
slug: "http/http/conn/HttpConn/wrap"
package: "http"
title: "HttpConn::wrap"
description: "Associated function HttpConn::wrap."
module: "http::conn"
kind: "static method"
name: "wrap"
parent: "HttpConn"
signature: "pub static fn wrap(Stream s) -> HttpConn"
import: "use http::conn::{HttpConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/conn.hy#L28"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`HttpConn`

## See also

- [`HttpConn`](/packages/http/reference/http/conn/HttpConn): Stream plus bytes pulled past the current message (keep-alive / pipelining).
- [`HttpConn::stream`](/packages/http/reference/http/conn/HttpConn/stream)
- [`HttpConn::can_reuse`](/packages/http/reference/http/conn/HttpConn/can_reuse)
