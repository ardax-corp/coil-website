---
slug: "prelude/IntoIterator/into_iter"
title: "IntoIterator::into_iter"
description: "Converts value into its iterator."
module: "prelude"
kind: "method"
name: "into_iter"
parent: "IntoIterator"
signature: "fn into_iter(T value) -> IntoIter"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/prelude.hy#L423"
order: 0
---

Converts `value` into its iterator.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`IntoIter`

## See also

- [`IntoIterator`](/docs/reference/prelude/IntoIterator): A type that can be turned into an `Iterator`, which makes it usable in `for x in value`.
