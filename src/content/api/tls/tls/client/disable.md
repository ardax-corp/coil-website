---
slug: "tls/tls/client/disable"
package: "tls"
title: "disable"
description: "Sends TLS close_notify to the peer and returns s."
module: "tls::client"
kind: "fn"
name: "disable"
signature: "fn disable(Stream s) -> Result<Stream, TlsError>"
import: "use tls::client::{disable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tls/blob/989c3660eb5b3de4a0ebd68a395be45bc626a332/src/tls/client.hy#L104"
order: 2
---

Sends TLS `close_notify` to the peer and returns `s`.

It only announces the end of the TLS session: the socket stays open and
the session is freed when the stream is closed or dropped.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Stream, TlsError>`

## Errors

`TlsError::Io(IoError::InvalidInput)` when `s` has no TLS session.

## See also

- [`enable`](/packages/tls/reference/tls/client/enable): Runs a TLS client handshake on the connected TCP stream `s` and returns the same `Stream`, now encrypted.
