---
slug: "io/Close/close"
title: "Close::close"
description: "Releases the resource; a second close is Err(IoError::AlreadyClosed)."
module: "io"
kind: "method"
name: "close"
parent: "Close"
signature: "fn close(S s) -> Result<unit, IoError>"
import: "use io::{Close};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L230"
order: 0
---

Releases the resource; a second [`close`](/docs/reference/io/fn.close) is `Err(IoError::AlreadyClosed)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`io::close`](/docs/reference/io/fn.close)
- [`Close`](/docs/reference/io/Close): Types that hold a resource to release; implemented for `Stream`, where `close` behaves like the free function `io::close`.
