---
slug: "prelude/Vec/clear"
title: "Vec::clear"
description: "Removes every element. The capacity is kept."
module: "prelude"
kind: "method"
name: "clear"
parent: "Vec"
signature: "pub fn clear()"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude.hy#L228"
order: 7
---

Removes every element. The capacity is kept.

Called on a `Vec` value as `value.clear(…)`.

## Examples

```coil
use tests::assert;
let v: Vec<int> = [1, 2, 3];
v.clear();
assert!(v.len() == 0);
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
