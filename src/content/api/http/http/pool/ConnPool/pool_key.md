---
slug: "http/http/pool/ConnPool/pool_key"
package: "http"
title: "ConnPool::pool_key"
description: "The pool key for u: scheme://host:port."
module: "http::pool"
kind: "method"
name: "pool_key"
parent: "ConnPool"
signature: "pub fn pool_key(Url u) -> string"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/516265cfe247ea0f8d6d5e9e45f18b40fadf1410/src/http/pool.coil#L68"
order: 2
---

The pool key for `u`: `scheme://host:port`.

Called on a `ConnPool` value as `value.pool_key(…)`.

## Parameters

| Name | Type |
|------|------|
| `u` | `Url` |

## Returns

`string`

## See also

- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream): Dials a new connection to `u`'s origin, bypassing the pool.
- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire): An idle connection for `u`'s origin, or a new one from `open_stream`.
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release): Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.
- [`ConnPool::discard`](/packages/http/reference/http/pool/ConnPool/discard): Closes `c` without pooling it.
- [`ConnPool::clear`](/packages/http/reference/http/pool/ConnPool/clear): Closes and forgets every idle connection.
