---
slug: "prelude/Vec/from"
title: "Vec::from"
description: "Creates a vector holding a copy of the elements of the fixed array arr."
module: "prelude"
kind: "static method"
name: "from"
parent: "Vec"
signature: "pub static fn from([T; N] arr) -> Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude.hy#L156"
order: 2
---

Creates a vector holding a copy of the elements of the fixed array `arr`.

## Parameters

| Name | Type |
|------|------|
| `arr` | `[T; N]` |

## Returns

`Vec<T>`

## Examples

```coil
use tests::assert;
let v = Vec::from([1, 2, 3]);
v.push(4);
assert!(v.len() == 4);
assert!(v[3] == 4);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of T values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least n elements.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends x to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or None when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts x at index i, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index i and returns it, shifting later elements left.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
