---
slug: "http/http/server/Server/bind"
package: "http"
title: "Server::bind"
description: "Starts listening on host:port. Port 0 picks a free port; read it with bound_port. Returns Io when the address cannot be bound."
module: "http::server"
kind: "method"
name: "bind"
parent: "Server"
signature: "pub fn bind(string host, int port) -> Result<(), HttpError>"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/server.hy#L140"
order: 1
---

Starts listening on `host:port`. Port `0` picks a free port; read it with [`bound_port`](/packages/http/reference/http/server/Server/bound_port). Returns `Io` when the address cannot be bound.

Called on a `Server` value as `value.bind(…)`.

## Parameters

| Name | Type |
|------|------|
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<(), HttpError>`

## See also

- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port)
- [`Server`](/packages/http/reference/http/server/Server): A listening HTTP server socket and its TLS settings.
- [`Server::new`](/packages/http/reference/http/server/Server/new): An unbound server without TLS.
- [`Server::tls`](/packages/http/reference/http/server/Server/tls): Serves TLS with this PEM certificate chain and private key.
