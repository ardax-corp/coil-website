---
slug: "prelude/Vec"
title: "Vec"
description: "A growable, heap-allocated vector of T values."
module: "prelude"
kind: "class"
name: "Vec"
signature: "class Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude.hy#L117"
order: 2
---

A growable, heap-allocated vector of `T` values.

`Vec` is auto-imported. Create one with [`Vec::new()`](/docs/reference/prelude/Vec/new),
`Vec::with_capacity(n)`, `Vec::from(array)`, or an array literal where a
`Vec<T>` is expected (`let v: Vec<int> = [1, 2];`). Read and write
elements with `v[i]` and `v[i] = x`; an index that is negative or not less
than `v.len()` panics with `index out of bounds`.

`for x in v` iterates the elements in order. Rest parameters (`T... xs`)
arrive as a `Vec<T>`, and IO buffers are `Vec<byte>`. A `Vec` supports
unary `-` and scalar broadcast (`k * v`), but two `Vec` values cannot be
zipped with an operator; use fixed `[T; N]` arrays for that.

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/docs/reference/prelude/Vec/new) | Creates a new, empty vector. |
| [`with_capacity`](/docs/reference/prelude/Vec/with_capacity) | Creates an empty vector with room for at least n elements. |
| [`from`](/docs/reference/prelude/Vec/from) | Creates a vector holding a copy of the elements of the fixed array arr. |

## Methods

| Name | Description |
|------|-------------|
| [`push`](/docs/reference/prelude/Vec/push) | Appends x to the end of the vector. |
| [`pop`](/docs/reference/prelude/Vec/pop) | Removes the last element and returns it, or None when the vector is empty. |
| [`insert`](/docs/reference/prelude/Vec/insert) | Inserts x at index i, shifting later elements one place to the right. |
| [`remove`](/docs/reference/prelude/Vec/remove) | Removes the element at index i and returns it, shifting later elements left. |
| [`clear`](/docs/reference/prelude/Vec/clear) | Removes every element. |
| [`reserve`](/docs/reference/prelude/Vec/reserve) | Ensures room for at least n more elements beyond the current length. |
| [`capacity`](/docs/reference/prelude/Vec/capacity) | Returns how many elements the vector can hold before it must reallocate. |
| [`len`](/docs/reference/prelude/Vec/len) | Returns the number of elements in the vector. |

## Trait implementations

- `Arbitrary` for `Vec<T: Arbitrary>`

## Examples

```coil
use tests::assert;
let v: Vec<int> = Vec::new();
v.push(1);
v.push(2);
v[0] = 7;
let total = 0;
for x in v {
    total = total + x;
}
assert!(total == 9);
assert!(v.len() == 2);
```

## See also

- [`Vec::new`](/docs/reference/prelude/Vec/new)
- [`Range`](/docs/reference/prelude/Range): A lazy half-open range start..end: every value from start up to, but not including, end.
- [`RangeInclusive`](/docs/reference/prelude/RangeInclusive): A lazy inclusive range start..=end: every value from start up to and including end.
