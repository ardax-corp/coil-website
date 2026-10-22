---
slug: "io/sync/copy"
title: "copy"
description: "Copy file contents from src to dst via virtual io::fs::copy."
module: "io::sync"
kind: "fn"
name: "copy"
signature: "fn copy(string dst, string src) -> Result<int, IoError>"
import: "use io::sync::{copy};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/sync.hy#L190"
order: 6
---

Copy file contents from `src` to `dst` via virtual [`io::fs::copy`](/docs/reference/io/fs/copy).

## Parameters

| Name | Type |
|------|------|
| `dst` | `string` |
| `src` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::copy`](/docs/reference/io/fs/copy)
- [`write_all`](/docs/reference/io/sync/write_all): Write every byte of buf to s, parking on WouldBlock until done.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fill buf from s, parking on WouldBlock; None on EOF before fill.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Read from s until EOF into a new Vec<byte>, parking on WouldBlock.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Blocking accept on listener, parking on WouldBlock.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Blocking UDP recv_from, parking on WouldBlock; returns (n, host, port).
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Blocking UDP send_to, parking on WouldBlock.
- [`print`](/docs/reference/io/sync/print): Write UTF-8 bytes of s to stdout (no trailing newline).
