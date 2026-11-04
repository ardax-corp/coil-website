---
slug: "http/http/server/Server/new"
package: "http"
title: "Server::new"
description: "An unbound server without TLS."
module: "http::server"
kind: "static method"
name: "new"
parent: "Server"
signature: "pub static fn new() -> Server"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/d2b81eaeb6f5b4e7d794874f593cb4e9406afd27/src/http/server.coil#L134"
order: 0
---

An unbound server without TLS.

## Returns

`Server`

## See also

- [`Server`](/packages/http/reference/http/server/Server): A listening HTTP server socket and its TLS settings.
- [`Server::bind`](/packages/http/reference/http/server/Server/bind): Starts listening on `host:port`.
- [`Server::tls`](/packages/http/reference/http/server/Server/tls): Serves TLS with this PEM certificate chain and private key.
- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port): The port the listener is bound to; useful after `bind(host, 0)`.
