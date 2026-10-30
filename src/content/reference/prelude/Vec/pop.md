---
slug: "prelude/Vec/pop"
title: "Vec::pop"
description: "Removes the last element and returns it, or None when the vector is empty."
module: "prelude"
kind: "method"
name: "pop"
parent: "Vec"
signature: "pub fn pop() -> Option<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/prelude.hy#L181"
order: 4
---

Removes the last element and returns it, or `None` when the vector is empty.

Called on a `Vec` value as `value.pop(…)`.

## Returns

`Option<T>`

## Examples

```coil
use tests::assert;
let v: Vec<int> = [1, 2];
assert!((v.pop() ?? 0) == 2);
assert!((v.pop() ?? 0) == 1);
assert!((v.pop() ?? 0) == 0);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::push`](/docs/reference/prelude/Vec/push): Appends `x` to the end of the vector.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
