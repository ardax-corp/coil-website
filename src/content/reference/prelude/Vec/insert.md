---
slug: "prelude/Vec/insert"
title: "Vec::insert"
description: "Inserts x at index i, shifting later elements one place to the right."
module: "prelude"
kind: "method"
name: "insert"
parent: "Vec"
signature: "pub fn insert(int i, T x)"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/prelude.hy#L201"
order: 5
---

Inserts `x` at index `i`, shifting later elements one place to the right.

`i` may equal [`len()`](/docs/reference/prelude/Vec/len) (append).

Called on a `Vec` value as `value.insert(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |
| `x` | `T` |

## Panics

Panics when `i` is negative or greater than [`len()`](/docs/reference/prelude/Vec/len).

## Examples

```coil
use tests::assert;
let v: Vec<int> = [1, 3];
v.insert(1, 2);
v.insert(3, 4);
assert!(v[1] == 2);
assert!(v[3] == 4);
```

## See also

- [`Vec::len`](/docs/reference/prelude/Vec/len)
- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
