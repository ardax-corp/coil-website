---
slug: "text/split"
title: "split"
description: "Splits s at every sep, returning the pieces between them."
module: "text"
kind: "fn"
name: "split"
signature: "fn split(string s, string sep) -> Result<Vec<string>, string>"
import: "use text::{split};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L249"
order: 11
---

Splits `s` at every `sep`, returning the pieces between them.

Adjacent separators give empty pieces, and so does a separator at either end.
An empty `sep` returns `[s]`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `sep` | `string` |

## Returns

`Result<Vec<string>, string>`

## Examples

```coil
use text::{split};
use tests::assert;
let parts = split("a,b,,c", ",") ?? Vec::new();
assert!(parts.len() == 4);
assert!(parts[2] == "");
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
