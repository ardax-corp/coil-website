---
slug: "prelude/RangeInclusive"
title: "RangeInclusive"
description: "A lazy inclusive range start..=end: every value from start up to and including end."
module: "prelude"
kind: "class"
name: "RangeInclusive"
signature: "class RangeInclusive<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude.hy#L318"
order: 4
---

A lazy inclusive range `start..=end`: every value from `start` up to and including `end`.

Written with the `..=` operator. Iteration and `.to_vec()` follow the same
rules as [`Range`](/docs/reference/prelude/Range): step `1` (or `1.0`), numeric bounds only, and empty when
`end` is less than `start`.

## Methods

| Name | Description |
|------|-------------|
| [`to_vec`](/docs/reference/prelude/RangeInclusive/to_vec) | Collects the range into a new [`Vec<T>`](/docs/reference/prelude/Vec), including the end value. |

## Examples

```coil
use tests::assert;
let sum = 0;
for i in 1..=4 {
    sum = sum + i;
}
assert!(sum == 10);
```

## See also

- [`Range`](/docs/reference/prelude/Range)
- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
