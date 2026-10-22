---
slug: "text/rfind"
title: "rfind"
description: "Returns the byte offset of the last needle in hay, or -1."
module: "text"
kind: "fn"
name: "rfind"
signature: "fn rfind(string hay, string needle) -> int"
import: "use text::{rfind};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L202"
order: 9
---

Returns the byte offset of the last `needle` in `hay`, or `-1`.

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
```

## Examples

```coil
use text::{rfind};
use tests::assert;
assert!(rfind("a=b=c", "=") == 3);
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
