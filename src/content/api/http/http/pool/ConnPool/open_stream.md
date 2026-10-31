---
slug: "http/http/pool/ConnPool/open_stream"
package: "http"
title: "ConnPool::open_stream"
description: "Dials a new connection to u's origin, bypassing the pool."
module: "http::pool"
kind: "method"
name: "open_stream"
parent: "ConnPool"
signature: "pub fn open_stream(Url u) -> Result<Stream, HttpError>"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/pool.coil#L80"
order: 3
---

Dials a new connection to `u`'s origin, bypassing the pool.

`https` URLs get a verified TLS session. Returns `UnsupportedScheme` for
anything but [`http`](/packages/http/reference/http) and `https`, `Io` when connecting fails and `Tls` when
the handshake fails.

Called on a `ConnPool` value as `value.open_stream(…)`.

## Parameters

| Name | Type |
|------|------|
| `u` | `Url` |

## Returns

`Result<Stream, HttpError>`

## See also

- [`http`](/packages/http/reference/http)
- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key): The pool key for `u`: `scheme://host:port`.
- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire): An idle connection for `u`'s origin, or a new one from `open_stream`.
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release): Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.
- [`ConnPool::discard`](/packages/http/reference/http/pool/ConnPool/discard): Closes `c` without pooling it.
