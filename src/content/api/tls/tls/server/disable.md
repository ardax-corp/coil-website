---
slug: "tls/tls/server/disable"
package: "tls"
title: "disable"
description: "Sends TLS close_notify to the client and returns s, as tls::client::disable does."
module: "tls::server"
kind: "fn"
name: "disable"
signature: "fn disable(Stream s) -> Result<Stream, TlsError>"
import: "use tls::server::{disable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/989c3660eb5b3de4a0ebd68a395be45bc626a332/src/tls/server.hy#L96"
order: 2
---

Sends TLS `close_notify` to the client and returns `s`, as [`tls::client::disable`](/packages/tls/reference/tls/client/disable) does.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Stream, TlsError>`

## Errors

`TlsError::Io(IoError::InvalidInput)` when `s` has no TLS session.

## See also

- [`tls::client::disable`](/packages/tls/reference/tls/client/disable)
- [`enable`](/packages/tls/reference/tls/server/enable): Runs a TLS server handshake on the accepted TCP stream `s` and returns the same `Stream`, now encrypted.
