---
slug: "http/http/ws/WsConn"
package: "http"
title: "WsConn"
description: "An open WebSocket over an upgraded HTTP/1.1 connection."
module: "http::ws"
kind: "class"
name: "WsConn"
signature: "class WsConn"
import: "use http::ws::{WsConn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L99"
order: 1
---

An open WebSocket over an upgraded HTTP/1.1 connection.

Made by [`ws_connect`](/packages/http/reference/http/ws/ws_connect) (client) or [`ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once) / [`ws_upgrade`](/packages/http/reference/http/ws/ws_upgrade) (server).
Send with [`ws_send_text`](/packages/http/reference/http/ws/ws_send_text), [`ws_send_bin`](/packages/http/reference/http/ws/ws_send_bin), [`ws_send_ping`](/packages/http/reference/http/ws/ws_send_ping), [`ws_send_pong`](/packages/http/reference/http/ws/ws_send_pong) and
[`ws_send_close`](/packages/http/reference/http/ws/ws_send_close); read with [`ws_recv`](/packages/http/reference/http/ws/ws_recv); end with [`ws_close`](/packages/http/reference/http/ws/ws_close). A client masks every
frame it sends, as RFC 6455 requires; a server never does.

v1 limits: no fragmented messages, no extensions or subprotocols, payloads up
to 1 MiB, and no WebSocket over HTTP/2.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `conn` | `HttpConn` | The upgraded HTTP/1.1 connection. |
| `role` | `int` | 1 for a client (masks outbound frames), 0 for a server. |
| `closed` | `int` | 1 once [`ws_close`](/packages/http/reference/http/ws/ws_close) closed the connection. |
| `seed` | `int` | State of the masking-key generator. |

## Examples

```coil
use http::ws::{ws_close, ws_connect, ws_opcode_text, ws_recv, ws_send_close, ws_send_text};
use http::url::HttpError;
use string::from_bytes;

fn main() -> Result<(), HttpError> {
    let c = ws_connect("ws://127.0.0.1:8080/echo")?;
    ws_send_text(c, "hello")?;
    let f = ws_recv(c)?;
    if f.opcode == ws_opcode_text() {
        let text = from_bytes(f.payload);
    }
    ws_send_close(c)?;
    ws_close(c);
    return ();
}
```

## See also

- [`http::ws::ws_connect`](/packages/http/reference/http/ws/ws_connect)
- [`http::ws::ws_serve_once`](/packages/http/reference/http/ws/ws_serve_once)
- [`http::ws::ws_upgrade`](/packages/http/reference/http/ws/ws_upgrade)
- [`http::ws::ws_send_text`](/packages/http/reference/http/ws/ws_send_text)
- [`http::ws::ws_send_bin`](/packages/http/reference/http/ws/ws_send_bin)
- [`http::ws::ws_send_ping`](/packages/http/reference/http/ws/ws_send_ping)
- [`http::ws::ws_send_pong`](/packages/http/reference/http/ws/ws_send_pong)
- [`http::ws::ws_send_close`](/packages/http/reference/http/ws/ws_send_close)
- [`http::ws::ws_recv`](/packages/http/reference/http/ws/ws_recv)
- [`http::ws::ws_close`](/packages/http/reference/http/ws/ws_close)
