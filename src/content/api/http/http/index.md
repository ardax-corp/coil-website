---
slug: "http/http/index"
package: "http"
title: "http"
description: "HTTP/1.1 and HTTP/2 client and server, WebSockets, and HTTPS through tls."
module: "http"
kind: "module"
name: "http"
origin: "package"
auto: false
order: 14
---

Start with [`http::client`](/packages/http/reference/http/client) to make requests and [`http::server`](/packages/http/reference/http/server) to serve them; the other submodules are the wire layers they are built on.

Part of the [http](/packages/http) package ([coil-http](https://github.com/ardax-corp/coil-http)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/http)).

## Modules

| Module | Description |
|--------|-------------|
| [`http::client`](/packages/http/reference/http/client) | HTTP/1.1 client with optional connection pooling, and HTTP/2 requests. |
| [`http::conn`](/packages/http/reference/http/conn) | Per-connection HTTP/1.1 framed reads: headers and a Content-Length body. |
| [`http::h1`](/packages/http/reference/http/h1) | HTTP/1.1 wire helpers shared by the client and the server. |
| [`http::h2`](/packages/http/reference/http/h2) | HTTP/2 framing, cleartext prior knowledge and TLS ALPN h2. |
| [`http::h2_session`](/packages/http/reference/http/h2_session) | An in-memory HTTP/2 connection: preface, frames and flow control, no sockets. |
| [`http::h3`](/packages/http/reference/http/h3) |  |
| [`http::hpack`](/packages/http/reference/http/hpack) | HPACK header compression (RFC 7541): static and dynamic tables, Huffman coding. |
| [`http::pool`](/packages/http/reference/http/pool) |  |
| [`http::request`](/packages/http/reference/http/request) | Request builders and the client-side Request type. |
| [`http::response`](/packages/http/reference/http/response) | Parsing and building HTTP/1.1 responses. |
| [`http::server`](/packages/http/reference/http/server) | HTTP/1.1 and HTTP/2 servers, cleartext or TLS. |
| [`http::sha1`](/packages/http/reference/http/sha1) | SHA-1 (RFC 3174) for the WebSocket handshake only. |
| [`http::url`](/packages/http/reference/http/url) | URL parsing, headers, HttpError and shared HTTP helpers. |
| [`http::ws`](/packages/http/reference/http/ws) | WebSockets (RFC 6455) over an HTTP/1.1 upgrade: handshake and framing. |
