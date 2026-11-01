---
slug: "tls/tls/server/ServerOpts"
package: "tls"
title: "ServerOpts"
description: "How enable sets up a server session: the certificate and key to present, the handshake deadline, client certificates and ALPN."
module: "tls::server"
kind: "class"
name: "ServerOpts"
signature: "class ServerOpts"
import: "use tls::server::{ServerOpts};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/8eb103338d9385609c0e75d08c5fc5c9b86015a6/src/tls/server.coil#L23"
order: 0
---

How [`enable`](/packages/tls/reference/tls/server/enable) sets up a server session: the certificate and key to present, the handshake deadline, client certificates and ALPN.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `cert_pem` | `string` | The server's certificate chain as PEM text, leaf first. |
| `key_pem` | `string` | The private key of the leaf certificate as PEM text (PKCS#8, PKCS#1 or SEC1). |
| `timeout_ms` | `int` | The handshake deadline in milliseconds; `0` or less means none. |
| `client_ca_pem` | `string` | PEM root certificates that client certificates must chain to. Any value but `""` requires clients to present a certificate (mutual TLS); `""` asks for none. |
| `alpn` | `string` | The ALPN protocols the server accepts, most preferred first, as a comma list (`"h2,http/1.1"`); `""` negotiates none. |

## Examples

```coil
use tls::server::{ServerOpts};
use tests::assert;
let cert = "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n";
let key = "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n";
// No client certificates; prefer HTTP/2, fall back to HTTP/1.1.
let opts = new ServerOpts(cert, key, 5000, "", "h2,http/1.1");
assert!(opts.client_ca_pem == "" && opts.alpn == "h2,http/1.1");
```

## See also

- [`tls::server::enable`](/packages/tls/reference/tls/server/enable)
