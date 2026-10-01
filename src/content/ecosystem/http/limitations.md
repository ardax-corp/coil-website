---
title: "Limitations (v1)"
description: "Client: verified TLS only (new ClientOpts(true, ...)). Server: PEM cert/key via Server::tls (new ServerOpts(...)). Requires the coil-tls package (use tls::{client,…"
source: "https://github.com/ardax-corp/coil-http/blob/0a973dbd2c9883f103bf8909a553dd9664452fce/docs/limitations.md"
---
# Limitations (v1)

- HTTP/1.1 and HTTP/2 (cleartext prior knowledge and TLS ALPN `h2`, with HTTP/1.1 fallback). WebSocket is an H1 upgrade only (see [h2.md](/packages/http/h2), [ws.md](/packages/http/ws), [h3.md](/packages/http/h3))
- No redirects or cookies
- Connection pool reuses TCP and frames each message by `Content-Length` or chunked transfer encoding
- HTTP/2 `Client::h2_get` / `h2_send` reuse one connection per origin on that client (not the HTTP/1.1 pool). `h2_connect` / `h2_request` stay one-shot
- `fn drop()` on `HttpConn` / `ConnPool` / `Client` / `Server` closes owned sockets at GC time (and VM teardown), not RAII. Prefer `Client::close` / `close_conn` when shutdown must happen now
- `coil test` harness does not support `thread::spawn`; run `coil examples/loopback.hy` / `examples/ws_loopback.hy` for full TCP loopback
- Depends on [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) (`conv`, `io::sync`) as a sibling root and [coil-tls](https://github.com/ardax-corp/coil-tls) via spool (`coil.lock` → `.spool/deps/tls`). `libtls` still needs a local native build on `[ffi] search_paths`
- WebSocket v1: H1 upgrade only (no HTTP/2, no extensions, no fragmented messages)
- IPv6 URL literals not supported
- CR/LF injection in URL/method/headers → `BadUrl`
- `Content-Length` longer than body → `BadResponse`

## Compiler workarounds

- `body_len_str` / `cl_trailer` lookup tables avoid SEGV when concatenating `int_to_dec` in Result-mode request builders
- `build_request_head` hot path is raise-free
- Prefer `http://host/?q=` over bare `host?q=` in URLs

## TLS

Client: verified TLS only (`new ClientOpts(true, ...)`). Server: PEM cert/key via `Server::tls` (`new ServerOpts(...)`). Requires the [coil-tls](https://github.com/ardax-corp/coil-tls) package (`use tls::{client, server}::enable`) and a built `libtls`, not a Coil `tls` Cargo feature.
