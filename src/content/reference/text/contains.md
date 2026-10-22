---
slug: "text/contains"
title: "contains"
description: "Returns true when needle occurs in hay. An empty needle is always found."
module: "text"
kind: "fn"
name: "contains"
signature: "fn contains(string hay, string needle) -> bool"
import: "use text::{contains};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L139"
order: 5
---

Returns `true` when `needle` occurs in `hay`. An empty `needle` is always found.

## Parameters

| Name | Type |
|------|------|
| `hay` | `string` |
| `needle` | `string` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || needle.len() <= hay.len()
```

## Examples

```coil
use text::{contains};
use tests::assert;
assert!(contains("haystack", "st"));
assert!(!contains("haystack", "x"));
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
- [`find`](/docs/reference/text/find): Returns the byte offset of the first needle in hay, or -1.
