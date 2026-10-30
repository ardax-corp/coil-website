---
slug: "http/http/ws/WsFrame"
package: "http"
title: "WsFrame"
description: "Class WsFrame."
module: "http::ws"
kind: "class"
name: "WsFrame"
signature: "class WsFrame"
import: "use http::ws::{WsFrame};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/ws.hy#L30"
order: 13
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `fin` | `int` |  |
| `opcode` | `int` |  |
| `masked` | `int` |  |
| `payload` | `Vec<byte>` |  |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/ws/WsFrame/new) |  |

## See also

- [`WsConn`](/packages/http/reference/http/ws/WsConn): Upgraded WebSocket on an HTTP/1.1 connection.
