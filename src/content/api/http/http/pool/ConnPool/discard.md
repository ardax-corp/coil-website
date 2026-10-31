---
slug: "http/http/pool/ConnPool/discard"
package: "http"
title: "ConnPool::discard"
description: "Closes c without pooling it."
module: "http::pool"
kind: "method"
name: "discard"
parent: "ConnPool"
signature: "pub fn discard(HttpConn c)"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/pool.hy#L144"
order: 6
---

Closes `c` without pooling it.

Called on a `ConnPool` value as `value.discard(…)`.

## Parameters

| Name | Type |
|------|------|
| `c` | `HttpConn` |

## See also

- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key): The pool key for `u`: `scheme://host:port`.
- [`ConnPool::open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream): Dials a new connection to `u`'s origin, bypassing the pool.
- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire): An idle connection for `u`'s origin, or a new one from `open_stream`.
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release): Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.
- [`ConnPool::clear`](/packages/http/reference/http/pool/ConnPool/clear): Closes and forgets every idle connection.
