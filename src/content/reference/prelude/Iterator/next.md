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
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/prelude.hy#L374"
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
