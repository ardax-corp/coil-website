---
slug: "stdlib/collections/collect_ints"
package: "stdlib"
title: "collect_ints"
description: "Returns the values of the range a..b as a Vec<int>."
module: "collections"
kind: "fn"
name: "collect_ints"
signature: "fn collect_ints(Range<int> r) -> Vec<int>"
import: "use collections::{collect_ints};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections.hy#L211"
order: 3
---

Returns the values of the range `a..b` as a [`Vec<int>`](/docs/reference/prelude/Vec).

`(a..b).to_vec()` does the same.

## Parameters

| Name | Type |
|------|------|
| `r` | `Range<int>` |

## Returns

`Vec<int>`

## Examples

```coil
use collections::{collect_ints};
use tests::assert;
let v = collect_ints(2..5);
assert!(v.len() == 3 && v[0] == 2);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`sort`](/packages/stdlib/reference/collections/sort): Returns a sorted copy of `arr`, in ascending order.
- [`sort_by`](/packages/stdlib/reference/collections/sort_by): Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order.
- [`reverse`](/packages/stdlib/reference/collections/reverse): Returns a copy of `arr` in reverse order.
- [`collect_ints_inclusive`](/packages/stdlib/reference/collections/collect_ints_inclusive): Returns the values of the inclusive range `a..=b` as a `Vec<int>`.
