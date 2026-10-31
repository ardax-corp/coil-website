---
slug: "http/http/ws/ws_serve_once"
package: "http"
title: "ws_serve_once"
description: "Accepts one connection on srv, reads its HTTP/1.1 request and completes the WebSocket upgrade."
module: "http::ws"
kind: "fn"
name: "ws_serve_once"
signature: "fn ws_serve_once(Server srv) -> Result<WsConn, HttpError>"
import: "use http::ws::{ws_serve_once};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/ws.hy#L896"
order: 25
---

Accepts one connection on `srv`, reads its HTTP/1.1 request and completes the WebSocket upgrade.

Cleartext only: `Server::tls` is not applied here. Returns `Io(InvalidInput)`
when `srv` is not bound and `Protocol` when the request is not an upgrade.

## Parameters

| Name | Type |
|------|------|
| `srv` | `Server` |

## Returns

`Result<WsConn, HttpError>`

## Examples

```coil
use http::server::Server;
use http::ws::{ws_echo_loop, ws_serve_once};
use http::url::HttpError;

fn main() -> Result<(), HttpError> {
    let srv = Server::new();
    srv.bind("127.0.0.1", 8080)?;
    let c = ws_serve_once(srv)?;
    ws_echo_loop(c)?;
    return ();
}
```

## See also

- [`ws_opcode_cont`](/packages/http/reference/http/ws/ws_opcode_cont): Opcode 0: continuation frame.
- [`ws_opcode_text`](/packages/http/reference/http/ws/ws_opcode_text): Opcode 1: text frame (UTF-8 payload).
- [`ws_opcode_bin`](/packages/http/reference/http/ws/ws_opcode_bin): Opcode 2: binary frame.
- [`ws_opcode_close`](/packages/http/reference/http/ws/ws_opcode_close): Opcode 8: close frame.
- [`ws_opcode_ping`](/packages/http/reference/http/ws/ws_opcode_ping): Opcode 9: ping frame.
- [`ws_opcode_pong`](/packages/http/reference/http/ws/ws_opcode_pong): Opcode 10: pong frame.
- [`encode_ws_frame`](/packages/http/reference/http/ws/encode_ws_frame): Encodes one frame.
- [`decode_ws_frame`](/packages/http/reference/http/ws/decode_ws_frame): Decodes the first complete frame in `raw`, unmasking the payload.
