---
slug: "http/http/pool/ConnPool/release"
package: "http"
title: "ConnPool::release"
description: "Returns c to the pool under u's origin, or closes it when the pool is full."
module: "http::pool"
kind: "method"
name: "release"
parent: "ConnPool"
signature: "pub fn release(Url u, HttpConn c)"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/pool.hy#L133"
order: 5
---

Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.

Called on a `ConnPool` value as `value.release(…)`.

## Parameters

| Name | Type |
|------|------|
| `u` | `Url` |
| `c` | `HttpConn` |

## See also

- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key): The pool key for `u`: `scheme://host:port`.
- [`ConnPool::open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream): Dials a new connection to `u`'s origin, bypassing the pool.
- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire): An idle connection for `u`'s origin, or a new one from `open_stream`.
- [`ConnPool::discard`](/packages/http/reference/http/pool/ConnPool/discard): Closes `c` without pooling it.
- [`ConnPool::clear`](/packages/http/reference/http/pool/ConnPool/clear): Closes and forgets every idle connection.
