---
slug: "text/to_upper"
title: "to_upper"
description: "Returns s with ASCII a-z turned into A-Z; other characters are unchanged."
module: "text"
kind: "fn"
name: "to_upper"
signature: "fn to_upper(string s) -> Result<string, string>"
import: "use text::{to_upper};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L496"
order: 22
---

Returns `s` with ASCII `a`-`z` turned into `A`-`Z`; other characters are unchanged.

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
use text::{to_upper};
use tests::assert;
assert!((to_upper("coil") ?? "") == "COIL");
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
