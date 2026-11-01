---
slug: "tls/tls/client/ClientOpts"
package: "tls"
title: "ClientOpts"
description: "How enable sets up a client session: certificate checks, extra trusted roots, the handshake deadline and the ALPN protocols to offer."
module: "tls::client"
kind: "class"
name: "ClientOpts"
signature: "class ClientOpts"
import: "use tls::client::{ClientOpts};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/8eb103338d9385609c0e75d08c5fc5c9b86015a6/src/tls/client.coil#L27"
order: 0
---

How [`enable`](/packages/tls/reference/tls/client/enable) sets up a client session: certificate checks, extra trusted roots, the handshake deadline and the ALPN protocols to offer.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `verify` | `bool` | Check the server's certificate chain and that it names the host. `false` skips both (handshake signatures are still checked), which is only safe for tests against a self-signed server. |
| `ca_pem` | `Option<string>` | Extra trusted root certificates, as PEM text, added to the bundled Mozilla roots when `verify` is `true`. |
| `ca_path` | `Option<string>` | A PEM file of extra trusted root certificates, added like `ca_pem`. |
| `timeout_ms` | `int` | The handshake deadline in milliseconds; `0` or less means none. |
| `alpn` | `string` | The ALPN protocols to offer, most preferred first, as a comma list (`"h2,http/1.1"`); `""` offers none. |

## Examples

```coil
use tls::client::{ClientOpts};
use tests::assert;
// Check the server against the bundled roots, give the handshake 10 s,
// and offer HTTP/2 before HTTP/1.1.
let opts = new ClientOpts(true, Option::None, Option::None, 10000, "h2,http/1.1");
assert!(opts.verify && opts.ca_pem.is_none());

// Also trust a private CA, read from a PEM file.
let private = new ClientOpts(true, Option::None, Option::Some("ca.pem"), 0, "");
assert!(private.timeout_ms == 0);
```

## See also

- [`tls::client::enable`](/packages/tls/reference/tls/client/enable)
