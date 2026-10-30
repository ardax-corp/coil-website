---
slug: "http/http/server/Server/tls"
package: "http"
title: "Server::tls"
description: "Method Server::tls."
module: "http::server"
kind: "method"
name: "tls"
parent: "Server"
signature: "pub fn tls(string cert_pem, string key_pem)"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/4cea6047613f2f18cd911bd6bd6b25025f5fa8b5/src/http/server.hy#L55"
order: 2
---

*No documentation yet.*

Called on a `Server` value as `value.tls(…)`.

## Parameters

| Name | Type |
|------|------|
| `cert_pem` | `string` |
| `key_pem` | `string` |

## See also

- [`Server`](/packages/http/reference/http/server/Server)
- [`Server::new`](/packages/http/reference/http/server/Server/new)
- [`Server::bind`](/packages/http/reference/http/server/Server/bind)
- [`Server::bound_port`](/packages/http/reference/http/server/Server/bound_port)
