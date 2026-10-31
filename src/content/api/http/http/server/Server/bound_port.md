---
slug: "http/http/server/Server/bound_port"
package: "http"
title: "Server::bound_port"
description: "The port the listener is bound to; useful after bind(host, 0)."
module: "http::server"
kind: "method"
name: "bound_port"
parent: "Server"
signature: "pub fn bound_port() -> Result<int, HttpError>"
import: "use http::server::{Server};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/server.hy#L178"
order: 3
---

The port the listener is bound to; useful after `bind(host, 0)`.

Returns `Io(InvalidInput)` before [`bind`](/packages/http/reference/http/server/Server/bind).

Called on a `Server` value as `value.bound_port(…)`.

## Returns

`Result<int, HttpError>`

## Examples

```coil
use http::server::Server;
use http::url::HttpError;

fn main() -> Result<(), HttpError> {
    let srv = Server::new();
    srv.bind("127.0.0.1", 0)?;
    let port = srv.bound_port()?;
    return ();
}
```

## See also

- [`Server::bind`](/packages/http/reference/http/server/Server/bind)
- [`Server`](/packages/http/reference/http/server/Server): A listening HTTP server socket and its TLS settings.
- [`Server::new`](/packages/http/reference/http/server/Server/new): An unbound server without TLS.
- [`Server::tls`](/packages/http/reference/http/server/Server/tls): Serves TLS with this PEM certificate chain and private key.
