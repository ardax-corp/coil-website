---
slug: "tls/tls/alpn_protocol"
package: "tls"
title: "alpn_protocol"
description: "The ALPN protocol negotiated on the TLS stream s (for example \"h2\"), or \"\" when the peers agreed on none."
module: "tls"
kind: "fn"
name: "alpn_protocol"
signature: "fn alpn_protocol(Stream s) -> Result<string, TlsError>"
import: "use tls::{alpn_protocol};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/989c3660eb5b3de4a0ebd68a395be45bc626a332/src/tls.hy#L38"
order: 0
---

The ALPN protocol negotiated on the TLS stream `s` (for example `"h2"`), or `""` when the peers agreed on none.

Call it after [`tls::client::enable`](/packages/tls/reference/tls/client/enable) or [`tls::server::enable`](/packages/tls/reference/tls/server/enable) returned
the stream.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<string, TlsError>`

## Errors

`TlsError::Io(IoError::InvalidInput)` when `s` has no TLS session (TLS was
never enabled on it, or it is not a socket); `TlsError::Io(IoError::NotFound)`
when the native library cannot be loaded.

## Examples

```coil
use io::{Stream};
use tls::{alpn_protocol};
use tls::client::{enable, ClientOpts};
use tls::error::{TlsError};

// `tcp` is a connected socket, from `io::net::tcp::connect(host, 443)`.
fn speaks_h2(Stream tcp, string host) -> Result<bool, TlsError> {
    let s = enable(tcp, host, new ClientOpts(true, None, None, 10000, "h2,http/1.1"))?;
    return alpn_protocol(s)? == "h2";
}
fn main() {}
```

## See also

- [`tls::client::enable`](/packages/tls/reference/tls/client/enable)
- [`tls::server::enable`](/packages/tls/reference/tls/server/enable)
