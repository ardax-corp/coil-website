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
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/gc.coil#L111"
order: 5
---

Makes a handle to `value` that does not keep it alive.

Values that are not heap objects ([`int`](/docs/reference/types/int), [`bool`](/docs/reference/types/bool), [`float`](/docs/reference/types/float), ...) are never
collected, so their [`Weak`](/docs/reference/gc/Weak) always upgrades. A `weak` of an [`Option`](/docs/reference/prelude/Option) or a
[`Result`](/docs/reference/prelude/Result) of a heap value refers to the heap object it holds. A two-word
value (an [`Option<int>`](/docs/reference/prelude/Option), a [`Result<int, E>`](/docs/reference/prelude/Result), an `(int, float)`, a range,
a small enum) and a readonly class instance are refused (`E0119`): they
are held in their words, with no object to observe. This holds through
generics too, at the call that sets a type parameter to such a type.

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
let w = weak(5);
assert!(match upgrade(w) { Option::Some(n) => n == 5, Option::None => false });
```

## See also

- [`int`](/docs/reference/types/int)
- [`bool`](/docs/reference/types/bool)
- [`float`](/docs/reference/types/float)
- [`gc::Weak`](/docs/reference/gc/Weak)
- [`Option`](/docs/reference/prelude/Option)
- [`Result`](/docs/reference/prelude/Result)
- [`root`](/docs/reference/gc/fn.root): Pins `value` so the garbage collector keeps it alive while the returned `Root` is reachable.
- [`get`](/docs/reference/gc/get): Returns the pinned value, leaving the pin in place.
