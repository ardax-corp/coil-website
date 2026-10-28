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
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/prelude.hy#L423"
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
