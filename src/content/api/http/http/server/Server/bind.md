---
slug: "http/http/server/Server/bind"
package: "http"
title: "Server::bind"
description: "Method Server::bind."
module: "http::server"
kind: "method"
name: "bind"
parent: "Server"
signature: "pub fn bind(string host, int port) -> Result<(), HttpError>"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L44"
order: 1
---

*No documentation yet.*

Called on a `Server` value as `value.bind(…)`.

## Parameters

| Name | Type |
|------|------|
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<(), HttpError>`

## See also

- [`Server`](/packages/http/reference/http/server/Server)
- [`Server::new`](/packages/http/reference/http/server/Server/new)
- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port)
