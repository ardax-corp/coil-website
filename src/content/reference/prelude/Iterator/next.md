---
slug: "prelude/Iterator/next"
title: "Iterator::next"
description: "Returns the next value, or None when the iterator is exhausted."
module: "prelude"
kind: "method"
name: "next"
parent: "Iterator"
signature: "fn next(I it) -> Option<Item>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude.hy#L382"
order: 0
---

Returns the next value, or `None` when the iterator is exhausted.

## Parameters

| Name | Type |
|------|------|
| `it` | `I` |

## Returns

`Option<Item>`

## See also

- [`Iterator`](/docs/reference/prelude/Iterator): A source of values that `for` loops pull from one at a time.
