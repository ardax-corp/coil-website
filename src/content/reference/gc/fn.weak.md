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
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/gc.hy#L107"
order: 5
---

Makes a handle to `value` that does not keep it alive.

Values that are not heap objects ([`int`](/docs/reference/types/int), [`bool`](/docs/reference/types/bool), [`float`](/docs/reference/types/float), ...) are never
collected, so their [`Weak`](/docs/reference/gc/Weak) always upgrades. `value` can be of any type:
a `weak` of an [`Option`](/docs/reference/prelude/Option) or a [`Result`](/docs/reference/prelude/Result) refers to the heap object it holds.

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
