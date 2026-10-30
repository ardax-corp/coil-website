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
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/prelude.hy#L374"
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
