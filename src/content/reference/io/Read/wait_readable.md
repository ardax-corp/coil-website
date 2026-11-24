---
slug: "io/Read/wait_readable"
title: "Read::wait_readable"
description: "Waits until a read can make progress; see io::wait_readable."
module: "io"
kind: "method"
name: "wait_readable"
parent: "Read"
signature: "fn wait_readable(S s) -> Result<unit, IoError>"
import: "use io::{Read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L165"
order: 1
---

Waits until a [`read`](/docs/reference/io/Read/read) can make progress; see [`io::wait_readable`](/docs/reference/io/wait_readable).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`Read::read`](/docs/reference/io/Read/read)
- [`io::wait_readable`](/docs/reference/io/wait_readable)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from without waiting; implemented for `Stream`, and by any class (a TLS stream, a test double).
