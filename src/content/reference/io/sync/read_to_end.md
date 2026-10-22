---
slug: "io/sync/read_to_end"
title: "read_to_end"
description: "Read from s until EOF into a new Vec<byte>, parking on WouldBlock."
module: "io::sync"
kind: "fn"
name: "read_to_end"
signature: "fn read_to_end(Stream s) -> Result<Vec<byte>, IoError>"
import: "use io::sync::{read_to_end};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/sync.hy#L84"
order: 2
---

Read from `s` until EOF into a new [`Vec<byte>`](/docs/reference/prelude/Vec), parking on `WouldBlock`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`write_all`](/docs/reference/io/sync/write_all): Write every byte of buf to s, parking on WouldBlock until done.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fill buf from s, parking on WouldBlock; None on EOF before fill.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Blocking accept on listener, parking on WouldBlock.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Blocking UDP recv_from, parking on WouldBlock; returns (n, host, port).
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Blocking UDP send_to, parking on WouldBlock.
- [`copy`](/docs/reference/io/sync/copy): Copy file contents from src to dst via virtual io::fs::copy.
- [`print`](/docs/reference/io/sync/print): Write UTF-8 bytes of s to stdout (no trailing newline).
