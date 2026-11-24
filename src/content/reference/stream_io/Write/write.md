---
slug: "stream_io/Write/write"
title: "Write::write"
description: "Method Write::write."
module: "stream_io"
kind: "method"
name: "write"
parent: "Write"
signature: "fn write(S s, Vec<byte> buf) -> Result<int, IoError>"
import: "use stream_io::{Write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L26"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`Write`](/docs/reference/stream_io/Write): Types that bytes can be written to without waiting.
- [`Write::wait_writable`](/docs/reference/stream_io/Write/wait_writable)
- [`Write::write_from`](/docs/reference/stream_io/Write/write_from): `write` of `buf` from index `offset` on.
- [`Write::flush`](/docs/reference/stream_io/Write/flush)
