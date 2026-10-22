---
slug: "collections/vec/index_of"
title: "index_of"
description: "Returns the index of the first needle in xs, or -1. There is an int and a string version."
module: "collections::vec"
kind: "fn"
name: "index_of"
signature: "fn index_of(Vec<int> xs, int needle) -> int"
signatures: ["fn index_of(Vec<int> xs, int needle) -> int","fn index_of(Vec<string> xs, string needle) -> int"]
import: "use collections::vec::{index_of};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/collections/vec.hy#L49"
order: 3
---

Returns the index of the first `needle` in `xs`, or `-1`. There is an [`int`](/docs/reference/types/int) and a [`string`](/docs/reference/types/string) version.

### `fn index_of(Vec<int> xs, int needle) -> int`

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `needle` | `int` |

#### Returns

`int`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result >= -1 && result < xs.len()
ensures result < 0 || xs[result] == needle
```

### `fn index_of(Vec<string> xs, string needle) -> int`

Returns the index of the first `needle` in `xs`, or `-1`.

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<string>` |
| `needle` | `string` |

#### Returns

`int`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result >= -1 && result < xs.len()
ensures result < 0 || xs[result] == needle
```

## Examples

```coil
use collections::vec::{index_of};
use tests::assert;
let xs: Vec<int> = [3, 1, 4, 1];
assert!(index_of(xs, 1) == 1);
assert!(index_of(xs, 9) == -1);
```

## See also

- [`int`](/docs/reference/types/int)
- [`string`](/docs/reference/types/string)
- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`contains`](/docs/reference/collections/vec/contains): Returns true when needle is in xs.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
