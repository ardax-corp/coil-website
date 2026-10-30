---
slug: "http/http/ws/WsConn"
package: "http"
title: "WsConn"
description: "Upgraded WebSocket on an HTTP/1.1 connection. role 1 = client (mask outbound)."
module: "http::ws"
kind: "class"
name: "WsConn"
signature: "class WsConn"
import: "use http::ws::{WsConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/ws.hy#L44"
order: 0
---

Upgraded WebSocket on an HTTP/1.1 connection. `role` 1 = client (mask outbound).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `conn` | `HttpConn` |  |
| `role` | `int` |  |
| `closed` | `int` |  |
| `seed` | `int` |  |

## See also

- [`WsFrame`](/packages/http/reference/http/ws/WsFrame)
