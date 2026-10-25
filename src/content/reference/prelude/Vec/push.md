---
slug: "prelude/Vec/push"
title: "Vec::push"
description: "Appends x to the end of the vector."
module: "prelude"
kind: "method"
name: "push"
parent: "Vec"
signature: "pub fn push(T x)"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude.hy#L168"
order: 3
---

Appends `x` to the end of the vector.

Called on a `Vec` value as `value.push(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `T` |

## Examples

```coil
use tests::assert;
let v: Vec<int> = Vec::new();
v.push(5);
assert!(v[0] == 5);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`Vec::new`](/docs/reference/prelude/Vec/new): Creates a new, empty vector.
- [`Vec::with_capacity`](/docs/reference/prelude/Vec/with_capacity): Creates an empty vector with room for at least `n` elements.
- [`Vec::from`](/docs/reference/prelude/Vec/from): Creates a vector holding a copy of the elements of the fixed array `arr`.
- [`Vec::pop`](/docs/reference/prelude/Vec/pop): Removes the last element and returns it, or `None` when the vector is empty.
- [`Vec::insert`](/docs/reference/prelude/Vec/insert): Inserts `x` at index `i`, shifting later elements one place to the right.
- [`Vec::remove`](/docs/reference/prelude/Vec/remove): Removes the element at index `i` and returns it, shifting later elements left.
- [`Vec::clear`](/docs/reference/prelude/Vec/clear): Removes every element.
