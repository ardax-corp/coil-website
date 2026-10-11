---
title: "coil-http documentation"
description: "Userland HTTP/1.1 client and server for Coil programs."
source: "https://github.com/ardax-corp/coil-http/blob/90d971fba1a589d8131ab83104c28236d4a59354/docs/README.md"
---
# coil-http documentation

Userland HTTP/1.1 client and server for Coil programs.

| Doc | Topic |
|-----|-------|
| [consume.md](/packages/http/consume) | Roots, grants, and spool |
| [client.md](/packages/http/client) | `Client`, `Request`, pooling |
| [server.md](/packages/http/server) | `Server`, `HttpHandler` |
| [limitations.md](/packages/http/limitations) | v1 scope and compiler notes |
| [h2.md](/packages/http/h2) | HTTP/2 framing, HPACK, ALPN |
| [ws.md](/packages/http/ws) | WebSocket RFC 6455 (H1 upgrade) |
| [h3.md](/packages/http/h3) | HTTP/3 stub / QUIC strategy |

## Requirements

- [coil-tls](https://github.com/ardax-corp/coil-tls) on `--root` and `libtls` on `--ffi-search-path` for `https://`
- `thread` module for loopback / concurrent server examples
