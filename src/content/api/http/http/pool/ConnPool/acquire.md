---
slug: "http/http/pool/ConnPool/acquire"
package: "http"
title: "ConnPool::acquire"
description: "An idle connection for u's origin, or a new one from open_stream."
module: "http::pool"
kind: "method"
name: "acquire"
parent: "ConnPool"
signature: "pub fn acquire(Url u) -> Result<HttpConn, HttpError>"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/pool.hy#L110"
order: 4
---

An idle connection for `u`'s origin, or a new one from [`open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream).

Called on a `ConnPool` value as `value.acquire(…)`.

## Parameters

| Name | Type |
|------|------|
| `u` | `Url` |

## Returns

`Result<HttpConn, HttpError>`

## See also

- [`ConnPool::open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream)
- [`ConnPool`](/packages/http/reference/http/pool/ConnPool): Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.
- [`ConnPool::new`](/packages/http/reference/http/pool/ConnPool/new): An empty pool that keeps up to 4 idle connections.
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max): Sets the most idle connections the pool keeps.
- [`ConnPool::pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key): The pool key for `u`: `scheme://host:port`.
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release): Returns `c` to the pool under `u`'s origin, or closes it when the pool is full.
- [`ConnPool::discard`](/packages/http/reference/http/pool/ConnPool/discard): Closes `c` without pooling it.
- [`ConnPool::clear`](/packages/http/reference/http/pool/ConnPool/clear): Closes and forgets every idle connection.
