---
slug: "http/http/pool/ConnPool/clear"
package: "http"
title: "ConnPool::clear"
description: "Closes and forgets every idle connection."
module: "http::pool"
kind: "method"
name: "clear"
parent: "ConnPool"
signature: "pub fn clear()"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/pool.hy#L149"
order: 7
---

Closes and forgets every idle connection.

Called on a `ConnPool` value as `value.clear(…)`.

## See also

- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key): The pool key for `u`: `scheme://host:port`.
- [`ConnPool::open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream): Dials a new connection to `u`'s origin, bypassing the pool.
- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire): An idle connection for `u`'s origin, or a new one from `open_stream`.
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release): Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.
- [`ConnPool::discard`](/packages/http/reference/http/pool/ConnPool/discard): Closes `c` without pooling it.
