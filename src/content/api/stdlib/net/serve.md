---
slug: "stdlib/net/serve"
package: "stdlib"
title: "serve"
description: "Accepts connections on listener and runs handler on each one in its own task, with at most max running at once (at least 1). Each connection is closed when its handler returns."
module: "net"
kind: "fn"
name: "serve"
signature: "fn serve(Stream listener, int max, Stream -> unit handler) -> Result<int, IoError>"
import: "use net::{serve};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/net.hy#L22"
order: 0
---

Accepts connections on `listener` and runs `handler` on each one in its own task, with at most `max` running at once (at least 1). Each connection is closed when its handler returns.

Runs until `accept` fails, then waits for the running handlers and
returns the number of connections served. Closing the listener (from a
handler or another task) stops it: that ends with `Ok`.

## Parameters

| Name | Type |
|------|------|
| `listener` | `Stream` |
| `max` | `int` |
| `handler` | `Stream -> unit` |

## Returns

`Result<int, IoError>`

## Errors

The `accept` error, other than the listener being closed.

## Panics

A panicking handler is a bug: it fails the whole call with the same
message, as a panic fails its `scope`.
