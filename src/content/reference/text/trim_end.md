---
slug: "text/trim_end"
title: "trim_end"
description: "Returns s without trailing ASCII whitespace (space, tab, CR, LF)."
module: "text"
kind: "fn"
name: "trim_end"
signature: "fn trim_end(string s) -> Result<string, string>"
import: "use text::{trim_end};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L93"
order: 3
---

Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<string, string>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures ok_len(result) >= 0 && ok_len(result) <= s.len()
```

## Examples

```coil
use text::{trim_end};
use tests::assert;
assert!((trim_end(" hi \n") ?? "") == " hi");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
- [`find`](/docs/reference/text/find): Returns the byte offset of the first needle in hay, or -1.
