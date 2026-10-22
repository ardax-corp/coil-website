---
slug: "prelude/Range"
title: "Range"
description: "A lazy half-open range start..end: every value from start up to, but not including, end."
module: "prelude"
kind: "class"
name: "Range"
signature: "class Range<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude.hy#L282"
order: 3
---

A lazy half-open range `start..end`: every value from `start` up to, but not including, `end`.

Written with the `..` operator; the bounds must have the same type with an
[`Ord`](/docs/reference/prelude/ops/Ord) instance. `for x in a..b` and `.to_vec()` step by `1` (or `1.0`) and
work for [`int`](/docs/reference/types/int), [`byte`](/docs/reference/types/byte) and [`float`](/docs/reference/types/float) bounds only. A range whose end is not
greater than its start is empty.

## Methods

| Name | Description |
|------|-------------|
| [`to_vec`](/docs/reference/prelude/Range/to_vec) | Collects the range into a new [`Vec<T>`](/docs/reference/prelude/Vec). |

## Examples

```coil
use tests::assert;
let sum = 0;
for i in 0..4 {
    sum = sum + i;
}
assert!(sum == 6);
```

## See also

- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`int`](/docs/reference/types/int)
- [`byte`](/docs/reference/types/byte)
- [`float`](/docs/reference/types/float)
- [`Vec`](/docs/reference/prelude/Vec): A growable, heap-allocated vector of `T` values.
- [`RangeInclusive`](/docs/reference/prelude/RangeInclusive): A lazy inclusive range `start..=end`: every value from `start` up to and including `end`.
