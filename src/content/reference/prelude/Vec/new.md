---
slug: "prelude/Vec/new"
title: "Vec::new"
description: "Creates a new, empty vector."
module: "prelude"
kind: "static method"
name: "new"
parent: "Vec"
signature: "pub static fn new() -> Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/prelude.hy#L129"
order: 0
---

Creates a new, empty vector.

## Returns

`Vec<T>`

## Examples

```coil
use tests::assert;
let v: Vec<string> = Vec::new();
assert!(v.len() == 0);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
