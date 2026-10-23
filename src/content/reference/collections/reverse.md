---
slug: "collections/reverse"
title: "reverse"
description: "Returns a copy of arr in reverse order."
module: "collections"
kind: "fn"
name: "reverse"
signature: "fn reverse<T>(Vec<T> arr) -> Vec<T>"
import: "use collections::{reverse};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/collections.hy#L186"
order: 2
---

Returns a copy of `arr` in reverse order.

## Parameters

| Name | Type |
|------|------|
| `arr` | `Vec<T>` |

## Returns

`Vec<T>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() == arr.len()
```

## Examples

```coil
use collections::{reverse};
use tests::assert;
let xs: Vec<int> = [1, 2, 3];
assert!(reverse(xs)[0] == 3);
```

## See also

- [`sort`](/docs/reference/collections/sort): Returns a sorted copy of `arr`, in ascending order.
- [`sort_by`](/docs/reference/collections/sort_by): Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order.
- [`collect_ints`](/docs/reference/collections/collect_ints): Returns the values of the range `a..b` as a `Vec<int>`.
- [`collect_ints_inclusive`](/docs/reference/collections/collect_ints_inclusive): Returns the values of the inclusive range `a..=b` as a `Vec<int>`.
