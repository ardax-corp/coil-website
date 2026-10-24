---
slug: "prelude/Vec/capacity"
title: "Vec::capacity"
description: "Returns how many elements the vector can hold before it must reallocate."
module: "prelude"
kind: "method"
name: "capacity"
parent: "Vec"
signature: "pub fn capacity() -> int"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/prelude.hy#L251"
order: 9
---

Returns how many elements the vector can hold before it must reallocate.

Called on a `Vec` value as `value.capacity(…)`.

## Returns

`int`

## Examples

```coil
use tests::assert;
let v: Vec<int> = Vec::with_capacity(8);
assert!(v.capacity() >= 8);
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
