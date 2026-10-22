---
slug: "text/lines"
title: "lines"
description: "Splits s into lines at each LF, dropping one CR before it (so CRLF works too)."
module: "text"
kind: "fn"
name: "lines"
signature: "fn lines(string s) -> Result<Vec<string>, string>"
import: "use text::{lines};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L423"
order: 18
---

Splits `s` into lines at each LF, dropping one CR before it (so CRLF works too).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<string>, string>`

## Examples

```coil
use text::{lines};
use tests::assert;
let ls = lines("one\r\ntwo\nthree") ?? Vec::new();
assert!(ls.len() == 3);
assert!(ls[0] == "one");
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
