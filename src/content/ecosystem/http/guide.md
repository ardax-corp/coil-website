---
title: "coil-http documentation"
description: "Userland HTTP/1.1 client and server for Coil programs."
source: "https://github.com/ardax-corp/coil-http/blob/0a973dbd2c9883f103bf8909a553dd9664452fce/docs/README.md"
---
# coil-http documentation

Userland HTTP/1.1 client and server for Coil programs.

| Doc | Topic |
|-----|-------|
| [consume.md](/packages/http/consume) | Add to `coil.toml` roots |
| [client.md](/packages/http/client) | `Client`, `Request`, pooling |
| [server.md](/packages/http/server) | `Server`, `HttpHandler` |
| [limitations.md](/packages/http/limitations) | v1 scope and compiler notes |
| [h2.md](/packages/http/h2) | HTTP/2 framing, HPACK, ALPN |
| [ws.md](/packages/http/ws) | WebSocket RFC 6455 (H1 upgrade) |
| [h3.md](/packages/http/h3) | HTTP/3 stub / QUIC strategy |

## Requirements

- [coil-tls](https://github.com/ardax-corp/coil-tls) on `[module].roots` and `libtls` on `[ffi] search_paths` for `https://`
- `thread` module for loopback / concurrent server examples
