---
slug: "stream_io/Read/wait_readable"
title: "Read::wait_readable"
description: "Method Read::wait_readable."
module: "stream_io"
kind: "method"
name: "wait_readable"
parent: "Read"
signature: "fn wait_readable(S s) -> Result<unit, IoError>"
import: "use stream_io::{Read};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L15"
order: 1
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`Read`](/docs/reference/stream_io/Read): Types that bytes can be read from without waiting.
- [`Read::read`](/docs/reference/stream_io/Read/read)
