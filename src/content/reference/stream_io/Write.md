---
slug: "stream_io/Write"
title: "Write"
description: "Types that bytes can be written to without waiting."
module: "stream_io"
kind: "trait"
name: "Write"
signature: "trait Write<S>"
import: "use stream_io::{Write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L25"
order: 1
---

Types that bytes can be written to without waiting.

[`write`](/docs/reference/stream_io/Write/write) returns how many bytes of `buf` it took, or
`Err(IoError::WouldBlock)`; [`wait_writable`](/docs/reference/stream_io/Write/wait_writable) then waits until a retry can
make progress. [`write_from`](/docs/reference/stream_io/Write/write_from) writes from an offset into `buf`. [`flush`](/docs/reference/stream_io/Write/flush)
sends anything the writer holds back; it does nothing unless the type
says otherwise.

## Required methods

| Name | Description |
|------|-------------|
| [`write`](/docs/reference/stream_io/Write/write) |  |
| [`wait_writable`](/docs/reference/stream_io/Write/wait_writable) |  |
| [`write_from`](/docs/reference/stream_io/Write/write_from) | [`write`](/docs/reference/stream_io/Write/write) of `buf` from index `offset` on. |
| [`flush`](/docs/reference/stream_io/Write/flush) |  |

## Trait implementations

- `Write` for `Write`

## See also

- [`Write::write`](/docs/reference/stream_io/Write/write)
- [`Write::wait_writable`](/docs/reference/stream_io/Write/wait_writable)
- [`Write::write_from`](/docs/reference/stream_io/Write/write_from)
- [`Write::flush`](/docs/reference/stream_io/Write/flush)
- [`Read`](/docs/reference/stream_io/Read): Types that bytes can be read from without waiting.
- [`Close`](/docs/reference/stream_io/Close): Types that hold a resource to release.
