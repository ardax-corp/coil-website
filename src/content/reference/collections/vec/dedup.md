---
slug: "collections/vec/dedup"
title: "dedup"
description: "Returns xs with runs of equal neighbours collapsed to one value. There is an int and a string version."
module: "collections::vec"
kind: "fn"
name: "dedup"
signature: "fn dedup(Vec<int> xs) -> Vec<int>"
signatures: ["fn dedup(Vec<int> xs) -> Vec<int>","fn dedup(Vec<string> xs) -> Vec<string>"]
import: "use collections::vec::{dedup};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/collections/vec.hy#L118"
order: 5
---

Returns `xs` with runs of equal neighbours collapsed to one value. There is an [`int`](/docs/reference/types/int) and a [`string`](/docs/reference/types/string) version.

Only adjacent duplicates are removed; sort first to remove all of them.

### `fn dedup(Vec<int> xs) -> Vec<int>`

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |

#### Returns

`Vec<int>`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() <= xs.len()
ensures xs.len() == 0 || result.len() > 0
```

### `fn dedup(Vec<string> xs) -> Vec<string>`

Returns `xs` with runs of equal neighbours collapsed to one value.

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<string>` |

#### Returns

`Vec<string>`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result.len() <= xs.len()
ensures xs.len() == 0 || result.len() > 0
```

## Examples

```coil
use collections::vec::{dedup};
use tests::assert;
let xs: Vec<int> = [1, 1, 2, 2, 2, 1];
let d = dedup(xs);
assert!(d.len() == 3);
```

## See also

- [`int`](/docs/reference/types/int)
- [`string`](/docs/reference/types/string)
- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as `fold`; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns `true` when `needle` is in `xs`.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first `needle` in `xs`, or `-1`.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with `mapper` applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which `pred` is `true`, in order.
