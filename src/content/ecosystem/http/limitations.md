---
title: "Limitations (v1)"
description: "Client: verified TLS only (new ClientOpts(true, ...)). Server: PEM cert/key via Server::tls (new ServerOpts(...)). Requires the coil-tls package (use tls::{client,…"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/docs/limitations.md"
---
# Limitations (v1)

- HTTP/1.1 and HTTP/2 (cleartext prior knowledge and TLS ALPN `h2`, with HTTP/1.1 fallback). WebSocket is an H1 upgrade only (see [h2.md](/packages/http/h2), [ws.md](/packages/http/ws), [h3.md](/packages/http/h3))
- No redirects or cookies
- Connection pool reuses TCP and frames each message by `Content-Length` or chunked transfer encoding
- HTTP/2 `Client::h2_get` / `h2_send` reuse one connection per origin on that client (not the HTTP/1.1 pool). `h2_connect` / `h2_request` stay one-shot
- `fn drop()` on `HttpConn` / `ConnPool` / `Client` / `Server` closes owned sockets at GC time (and VM teardown), not RAII. Prefer `Client::close` / `close_conn` when shutdown must happen now
- `coil test` harness does not support `thread::spawn`; run `examples/loopback.coil` / `examples/ws_loopback.coil` with `coil` (same flags as `coil test`) for full TCP loopback
- Depends on [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) (`conv`, `io::sync`) and [coil-tls](https://github.com/ardax-corp/coil-tls) as `--root`s. `libtls` still needs a local native build on `--ffi-search-path`; spool does not build it
- WebSocket v1: H1 upgrade only (no HTTP/2, no extensions, no fragmented messages)
- IPv6 URL literals not supported
- CR/LF injection in URL/method → `BadUrl`; in header names/values → `InvalidHeader`
- `Content-Length` longer than body → `Protocol`

## Compiler workarounds

- `body_len_str` / `cl_trailer` lookup tables avoid SEGV when concatenating `int_to_dec` in Result-mode request builders
- `build_request_head` hot path is raise-free
- Prefer `http://host/?q=` over bare `host?q=` in URLs

## TLS

Client: verified TLS only (`new ClientOpts(true, ...)`). Server: PEM cert/key via `Server::tls` (`new ServerOpts(...)`). Requires the [coil-tls](https://github.com/ardax-corp/coil-tls) package (`use tls::{client, server}::enable`) and a built `libtls`, not a Coil `tls` Cargo feature.
