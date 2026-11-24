---
slug: "stream_io/Read/read"
title: "Read::read"
description: "Method Read::read."
module: "stream_io"
kind: "method"
name: "read"
parent: "Read"
signature: "fn read(S s, Vec<byte> buf) -> Result<Option<int>, IoError>"
import: "use stream_io::{Read};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L14"
order: 0
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## See also

- [`Read`](/docs/reference/stream_io/Read): Types that bytes can be read from without waiting.
- [`Read::wait_readable`](/docs/reference/stream_io/Read/wait_readable)
