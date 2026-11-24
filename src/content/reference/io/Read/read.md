---
slug: "io/Read/read"
title: "Read::read"
description: "Reads into buf; see io::read."
module: "io"
kind: "method"
name: "read"
parent: "Read"
signature: "fn read(S s, Vec<byte> buf) -> Result<Option<int>, IoError>"
import: "use io::{Read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L162"
order: 0
---

Reads into `buf`; see [`io::read`](/docs/reference/io/fn.read).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## See also

- [`io::read`](/docs/reference/io/fn.read)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from without waiting; implemented for `Stream`, and by any class (a TLS stream, a test double).
- [`Read::wait_readable`](/docs/reference/io/Read/wait_readable): Waits until a `read` can make progress; see `io::wait_readable`.
