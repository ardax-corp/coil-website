---
slug: "http/http/server/Server/tls"
package: "http"
title: "Server::tls"
description: "Serves TLS with this PEM certificate chain and private key."
module: "http::server"
kind: "method"
name: "tls"
parent: "Server"
signature: "pub fn tls(string cert_pem, string key_pem)"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/server.hy#L155"
order: 2
---

Serves TLS with this PEM certificate chain and private key.

The handshake runs per accepted connection, so a bad certificate or key shows
up when a client connects, not here.

Called on a `Server` value as `value.tls(…)`.

## Parameters

| Name | Type |
|------|------|
| `cert_pem` | `string` |
| `key_pem` | `string` |

## See also

- [`Server`](/packages/http/reference/http/server/Server): A listening HTTP server socket and its TLS settings.
- [`Server::new`](/packages/http/reference/http/server/Server/new): An unbound server without TLS.
- [`Server::bind`](/packages/http/reference/http/server/Server/bind): Starts listening on `host:port`.
- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port): The port the listener is bound to; useful after `bind(host, 0)`.
