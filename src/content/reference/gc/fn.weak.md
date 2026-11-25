---
slug: "gc/fn.weak"
title: "weak"
description: "Makes a handle to value that does not keep it alive."
module: "gc"
kind: "fn"
name: "weak"
signature: "fn weak<T>(T value) -> Weak<T>"
import: "use gc::{weak};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/c4231aba4e3db4e3f3f9ece8f3d5de6d8aa0ec4a/compiler/src/builtin_docs/gc.coil#L113"
order: 5
---

Makes a handle to `value` that does not keep it alive.

A `weak` of an [`Option`](/docs/reference/prelude/Option) or a [`Result`](/docs/reference/prelude/Result) of a heap value refers to the heap
object it holds. A value with no object of its own is refused (`E0119`):
a one-word value ([`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float), [`bool`](/docs/reference/types/bool), [`byte`](/docs/reference/types/byte), `()`, a scalar enum), a
two-word value (an [`Option<int>`](/docs/reference/prelude/Option), a [`Result<int, E>`](/docs/reference/prelude/Result), an `(int, float)`,
a range, a small enum) and a readonly class instance are held in their
words, with no object to observe. This holds through generics too, at the
call that sets a type parameter to such a type.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Weak<T>`

## Examples

```coil
use gc::{weak, upgrade};
use tests::assert;
let v = Vec::from([5]);
let w = weak(v);
// `v` is used below, so it is still alive here.
assert!(match upgrade(w) { Option::Some(u) => u[0] == 5, Option::None => false });
assert!(v.len() == 1);
```

## See also

- [`Option`](/docs/reference/prelude/Option)
- [`Result`](/docs/reference/prelude/Result)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`bool`](/docs/reference/types/bool)
- [`byte`](/docs/reference/types/byte)
- [`root`](/docs/reference/gc/fn.root): Pins `value` so it stays alive while the returned `Root` does.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
