---
slug: "prelude/Vec/with_capacity"
title: "Vec::with_capacity"
description: "Creates an empty vector with room for at least n elements."
module: "prelude"
kind: "static method"
name: "with_capacity"
parent: "Vec"
signature: "pub static fn with_capacity(int n) -> Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude.hy#L143"
order: 1
---

Creates an empty vector with room for at least `n` elements.

Pushing up to `n` elements does not reallocate. The length is still `0`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Vec<T>`

## Examples

```coil
use tests::assert;
let v: Vec<int> = Vec::with_capacity(16);
assert!(v.len() == 0);
assert!(v.capacity() >= 16);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
