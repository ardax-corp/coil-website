---
slug: "text/split_once"
title: "split_once"
description: "Splits s at the first sep into the parts before and after it."
module: "text"
kind: "fn"
name: "split_once"
signature: "fn split_once(string s, string sep) -> Result<(string, string), string>"
import: "use text::{split_once};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L284"
order: 12
---

Splits `s` at the first `sep` into the parts before and after it.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `sep` | `string` |

## Returns

`Result<(string, string), string>`

## Errors

Returns `Err` when `sep` does not occur in `s`.

## Examples

```coil
use text::{split_once};
use tests::assert;
let (k, v) = split_once("name=coil=lang", "=") ?? ("", "");
assert!(k == "name" && v == "coil=lang");
assert!(split_once("plain", "=").is_err());
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
