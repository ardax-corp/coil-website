---
slug: "collections/vec/contains"
title: "contains"
description: "Returns true when needle is in xs. There is an int and a string version."
module: "collections::vec"
kind: "fn"
name: "contains"
signature: "fn contains(Vec<int> xs, int needle) -> bool"
signatures: ["fn contains(Vec<int> xs, int needle) -> bool","fn contains(Vec<string> xs, string needle) -> bool"]
import: "use collections::vec::{contains};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/collections/vec.hy#L25"
order: 2
---

Returns `true` when `needle` is in `xs`. There is an [`int`](/docs/reference/types/int) and a [`string`](/docs/reference/types/string) version.

### `fn contains(Vec<int> xs, int needle) -> bool`

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<int>` |
| `needle` | `int` |

#### Returns

`bool`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || xs.len() > 0
```

### `fn contains(Vec<string> xs, string needle) -> bool`

Returns `true` when `needle` is in `xs`.

#### Parameters

| Name | Type |
|------|------|
| `xs` | `Vec<string>` |
| `needle` | `string` |

#### Returns

`bool`

#### Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || xs.len() > 0
```

## Examples

```coil
use collections::vec::{contains};
use tests::assert;
let xs: Vec<int> = [3, 1, 4];
assert!(contains(xs, 4));
let names: Vec<string> = ["ada", "alan"];
assert!(!contains(names, "grace"));
```

## See also

- [`int`](/docs/reference/types/int)
- [`string`](/docs/reference/types/string)
- [`fold_int`](/docs/reference/collections/vec/fold_int): The same as fold; kept for older code.
- [`index_of`](/docs/reference/collections/vec/index_of): Returns the index of the first needle in xs, or -1.
- [`binary_search`](/docs/reference/collections/vec/binary_search): Finds needle in the ascending vector xs by halving, and returns an index holding it.
- [`dedup`](/docs/reference/collections/vec/dedup): Returns xs with runs of equal neighbours collapsed to one value.
- [`map`](/docs/reference/collections/vec/map): Returns a new vector with mapper applied to each element, in order.
- [`filter`](/docs/reference/collections/vec/filter): Returns the elements for which pred is true, in order.
