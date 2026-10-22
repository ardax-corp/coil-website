---
slug: "prelude/Vec/remove"
title: "Vec::remove"
description: "Removes the element at index i and returns it, shifting later elements left."
module: "prelude"
kind: "method"
name: "remove"
parent: "Vec"
signature: "pub fn remove(int i) -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude.hy#L216"
order: 6
---

Removes the element at index `i` and returns it, shifting later elements left.

Returns `None` (and leaves the vector unchanged) when `i` is out of range.

Called on a `Vec` value as `value.remove(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |

## Returns

`Option<T>`

## Examples

```coil
use tests::assert;
let v: Vec<int> = [10, 20, 30];
assert!((v.remove(0) ?? 0) == 10);
assert!(v[0] == 20);
assert!((v.remove(9) ?? -1) == -1);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
