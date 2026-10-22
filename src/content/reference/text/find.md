---
slug: "text/find"
title: "find"
description: "Returns the byte offset of the first needle in hay, or -1. An empty needle matches at 0."
module: "text"
kind: "fn"
name: "find"
signature: "fn find(string hay, string needle) -> int"
import: "use text::{find};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L185"
order: 8
---

Returns the byte offset of the first `needle` in `hay`, or `-1`. An empty `needle` matches at `0`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `string` |
| `needle` | `string` |

## Returns

`int`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures result >= -1 && result <= hay.len()
ensures result < 0 || match_at(hay, needle, result)
ensures needle.len() > 0 || result == 0
```

## Examples

```coil
use text::{find};
use tests::assert;
assert!(find("a=b=c", "=") == 1);
assert!(find("abc", "z") == -1);
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
