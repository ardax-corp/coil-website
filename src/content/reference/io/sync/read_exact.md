---
slug: "io/sync/read_exact"
title: "read_exact"
description: "Fills all of buf from s, waiting whenever no data is ready."
module: "io::sync"
kind: "fn"
name: "read_exact"
signature: "fn read_exact(Stream s, Vec<byte> buf) -> Result<Option<int>, IoError>"
import: "use io::sync::{read_exact};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/io/sync.hy#L57"
order: 1
---

Fills all of `buf` from `s`, waiting whenever no data is ready.

Returns `Some(n)`: `n` is `buf.len()` once `buf` is full, or fewer when the
stream ends part way. Returns `None` when the stream ends before any byte.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## See also

- [`write_all`](/docs/reference/io/sync/write_all): Writes all of buf to s, waiting whenever the stream is not ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from s until it ends and returns everything read.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP listener and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into buf, and returns (bytes, sender host, sender port).
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends buf as one UDP datagram to host:port, waiting while the socket is not ready.
- [`copy`](/docs/reference/io/sync/copy): Copies the file src to dst.
- [`print`](/docs/reference/io/sync/print): Writes s to standard output, without a newline.
- [`println`](/docs/reference/io/sync/println): Writes s and a newline to standard output.
