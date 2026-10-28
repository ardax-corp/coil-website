---
slug: "prelude/Range/to_vec"
title: "Range::to_vec"
description: "Collects the range into a new Vec<T>."
module: "prelude"
kind: "method"
name: "to_vec"
parent: "Range"
signature: "pub fn to_vec() -> Vec<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/prelude.hy#L299"
order: 0
---

Collects the range into a new [`Vec<T>`](/docs/reference/prelude/Vec).

Only numeric ranges ([`int`](/docs/reference/types/int), [`byte`](/docs/reference/types/byte), [`float`](/docs/reference/types/float)) can be collected; other
element types are a compile-time error.

Called on a `Range` value as `value.to_vec(…)`.

## Returns

`Vec<T>`

## Examples

```coil
use tests::assert;
let v = (2..5).to_vec();
assert!(v.len() == 3);
assert!(v[0] == 2);
assert!((5..2).to_vec().len() == 0);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`int`](/docs/reference/types/int)
- [`byte`](/docs/reference/types/byte)
- [`float`](/docs/reference/types/float)
- [`Range`](/docs/reference/prelude/Range): A lazy half-open range `start..end`: every value from `start` up to, but not including, `end`.
