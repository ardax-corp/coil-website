---
slug: "prelude/Vec/reserve"
title: "Vec::reserve"
description: "Ensures room for at least n more elements beyond the current length."
module: "prelude"
kind: "method"
name: "reserve"
parent: "Vec"
signature: "pub fn reserve(int n)"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude.hy#L240"
order: 8
---

Ensures room for at least `n` more elements beyond the current length.

Called on a `Vec` value as `value.reserve(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Examples

```coil
use tests::assert;
let v: Vec<int> = [1, 2];
v.reserve(10);
assert!(v.capacity() >= 12);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
