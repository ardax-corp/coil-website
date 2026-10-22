---
slug: "io/sync/read_line"
title: "read_line"
description: "Read until LF (10) or EOF. Returns None on EOF with no bytes read. The trailing LF is not included; a lone CR before LF is stripped."
module: "io::sync"
kind: "fn"
name: "read_line"
signature: "fn read_line(Stream s) -> Result<Option<string>, IoError>"
import: "use io::sync::{read_line};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/sync.hy#L220"
order: 10
---

Read until LF (10) or EOF. Returns `None` on EOF with no bytes read. The trailing LF is not included; a lone CR before LF is stripped.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Option<string>, IoError>`

## See also

- [`write_all`](/docs/reference/io/sync/write_all): Write every byte of buf to s, parking on WouldBlock until done.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fill buf from s, parking on WouldBlock; None on EOF before fill.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Read from s until EOF into a new Vec<byte>, parking on WouldBlock.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Blocking accept on listener, parking on WouldBlock.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Blocking UDP recv_from, parking on WouldBlock; returns (n, host, port).
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Blocking UDP send_to, parking on WouldBlock.
- [`copy`](/docs/reference/io/sync/copy): Copy file contents from src to dst via virtual io::fs::copy.
- [`print`](/docs/reference/io/sync/print): Write UTF-8 bytes of s to stdout (no trailing newline).
