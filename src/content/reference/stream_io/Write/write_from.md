---
slug: "stream_io/Write/write_from"
title: "Write::write_from"
description: "write of buf from index offset on. By default it writes a copy of that part; a type that can write from the middle (Stream) overrides it."
module: "stream_io"
kind: "method"
name: "write_from"
parent: "Write"
signature: "fn write_from(S s, Vec<byte> buf, int offset) -> Result<int, IoError>"
import: "use stream_io::{Write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L32"
order: 2
---

[`write`](/docs/reference/stream_io/Write/write) of `buf` from index `offset` on. By default it writes a copy of that part; a type that can write from the middle (`Stream`) overrides it.

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |
| `offset` | `int` |

## Returns

`Result<int, IoError>`

## See also

- [`Write::write`](/docs/reference/stream_io/Write/write)
- [`Write`](/docs/reference/stream_io/Write): Types that bytes can be written to without waiting.
- [`Write::wait_writable`](/docs/reference/stream_io/Write/wait_writable)
- [`Write::flush`](/docs/reference/stream_io/Write/flush)
