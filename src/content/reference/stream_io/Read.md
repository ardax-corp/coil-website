---
slug: "stream_io/Read"
title: "Read"
description: "Types that bytes can be read from without waiting."
module: "stream_io"
kind: "trait"
name: "Read"
signature: "trait Read<S>"
import: "use stream_io::{Read};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L13"
order: 0
---

Types that bytes can be read from without waiting.

[`read`](/docs/reference/stream_io/Read/read) fills the front of `buf` and returns `Ok(Some(n))`, `Ok(None)`
at end of input, or `Err(IoError::WouldBlock)` when nothing is ready
yet; [`wait_readable`](/docs/reference/stream_io/Read/wait_readable) then waits until a retry can make progress.

## Required methods

| Name | Description |
|------|-------------|
| [`read`](/docs/reference/stream_io/Read/read) |  |
| [`wait_readable`](/docs/reference/stream_io/Read/wait_readable) |  |

## Trait implementations

- `Read` for `Read`

## See also

- [`Read::read`](/docs/reference/stream_io/Read/read)
- [`Read::wait_readable`](/docs/reference/stream_io/Read/wait_readable)
- [`Write`](/docs/reference/stream_io/Write): Types that bytes can be written to without waiting.
- [`Close`](/docs/reference/stream_io/Close): Types that hold a resource to release.
