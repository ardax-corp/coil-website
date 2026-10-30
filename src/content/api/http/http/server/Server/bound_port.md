---
slug: "http/http/server/Server/bound_port"
package: "http"
title: "Server::bound_port"
description: "Method Server::bound_port."
module: "http::server"
kind: "method"
name: "bound_port"
parent: "Server"
signature: "pub fn bound_port() -> Result<int, HttpError>"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L61"
order: 3
---

*No documentation yet.*

Called on a `Server` value as `value.bound_port(…)`.

## Returns

`Result<int, HttpError>`

## See also

- [`Server`](/packages/http/reference/http/server/Server)
- [`Server::new`](/packages/http/reference/http/server/Server/new)
- [`Server::bind`](/packages/http/reference/http/server/Server/bind)
- [`Server::tls`](/packages/http/reference/http/server/Server/tls)
