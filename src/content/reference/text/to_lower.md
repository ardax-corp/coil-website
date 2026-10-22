---
slug: "text/to_lower"
title: "to_lower"
description: "Returns s with ASCII A-Z turned into a-z; other characters are unchanged."
module: "text"
kind: "fn"
name: "to_lower"
signature: "fn to_lower(string s) -> Result<string, string>"
import: "use text::{to_lower};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L459"
order: 21
---

Returns `s` with ASCII `A`-`Z` turned into `a`-`z`; other characters are unchanged.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<string, string>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures ok_len(result) == s.len()
```

## Examples

```coil
use text::{to_lower};
use tests::assert;
assert!((to_lower("Hello, WORLD") ?? "") == "hello, world");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
