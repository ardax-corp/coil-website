---
slug: "text/starts_with"
title: "starts_with"
description: "Returns true when s begins with prefix."
module: "text"
kind: "fn"
name: "starts_with"
signature: "fn starts_with(string s, string prefix) -> bool"
import: "use text::{starts_with};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L154"
order: 6
---

Returns `true` when `s` begins with `prefix`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `prefix` | `string` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || prefix.len() <= s.len()
```

## Examples

```coil
use text::{starts_with};
use tests::assert;
assert!(starts_with("--verbose", "--"));
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
- [`find`](/docs/reference/text/find): Returns the byte offset of the first needle in hay, or -1.
