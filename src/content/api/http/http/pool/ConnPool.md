---
slug: "http/http/pool/ConnPool"
package: "http"
title: "ConnPool"
description: "Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive."
module: "http::pool"
kind: "class"
name: "ConnPool"
signature: "class ConnPool"
import: "use http::pool::{ConnPool};"
origin: "package"
source: "https://github.com/ardax-corp/coil-http/blob/5029bd9b17b0573ace3e203bd9ca82452682b1a8/src/http/pool.hy#L48"
order: 0
---

Idle HTTP/1.1 connections, keyed by scheme, host and port, for keep-alive.

Every `Client` owns one; most programs never touch it directly. [`acquire`](/packages/http/reference/http/pool/ConnPool/acquire)
hands out an idle connection for the URL's origin or dials a new one (TLS for
`https`), and [`release`](/packages/http/reference/http/pool/ConnPool/release) puts it back once a response was read in full. The
pool holds at most [`max`](/packages/http/reference/http/pool/ConnPool/max) idle connections (4 by default); a connection
released into a full pool is closed.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/http/reference/http/pool/ConnPool/new) | An empty pool that keeps up to 4 idle connections. |

## Methods

| Name | Description |
|------|-------------|
| [`max`](/packages/http/reference/http/pool/ConnPool/max) | Sets the most idle connections the pool keeps. |
| [`pool_key`](/packages/http/reference/http/pool/ConnPool/pool_key) | The pool key for `u`: `scheme://host:port`. |
| [`open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream) | Dials a new connection to `u`'s origin, bypassing the pool. |
| [`acquire`](/packages/http/reference/http/pool/ConnPool/acquire) | An idle connection for `u`'s origin, or a new one from [`open_stream`](/packages/http/reference/http/pool/ConnPool/open_stream). |
| [`release`](/packages/http/reference/http/pool/ConnPool/release) | Returns `c` to the pool under `u`'s origin, or closes it when the pool is full. |
| [`discard`](/packages/http/reference/http/pool/ConnPool/discard) | Closes `c` without pooling it. |
| [`clear`](/packages/http/reference/http/pool/ConnPool/clear) | Closes and forgets every idle connection. |

## Examples

```coil
use http::pool::ConnPool;
use http::url::parse_url;

fn main() {
    let pool = ConnPool::new();
    pool.max(8);
    let u = match parse_url("http://127.0.0.1:8080/") {
        Result::Ok(u) => u,
        Result::Err(e) => panic show(e),
    };
    let c = match pool.acquire(u) {
        Result::Ok(c) => c,
        Result::Err(e) => panic show(e),
    };
    // ... write a request on c.stream(), read the response ...
    pool.release(u, c);
    pool.clear();
}
```

## See also

- [`ConnPool::acquire`](/packages/http/reference/http/pool/ConnPool/acquire)
- [`ConnPool::release`](/packages/http/reference/http/pool/ConnPool/release)
- [`ConnPool::max`](/packages/http/reference/http/pool/ConnPool/max)
