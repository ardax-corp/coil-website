---
slug: "prelude/RangeInclusive/to_vec"
title: "RangeInclusive::to_vec"
description: "Collects the range into a new Vec<T>, including the end value."
module: "prelude"
kind: "method"
name: "to_vec"
parent: "RangeInclusive"
signature: "pub fn to_vec() -> Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude.hy#L331"
order: 0
---

Collects the range into a new [`Vec<T>`](/docs/reference/prelude/Vec), including the end value.

Called on a `RangeInclusive` value as `value.to_vec(…)`.

## Returns

`Vec<T>`

## Examples

```coil
use tests::assert;
let v = (1..=3).to_vec();
assert!(v.len() == 3);
assert!(v[2] == 3);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`RangeInclusive`](/docs/reference/prelude/RangeInclusive): A lazy inclusive range start..=end: every value from start up to and including end.
