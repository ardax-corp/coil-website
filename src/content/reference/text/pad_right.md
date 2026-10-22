---
slug: "text/pad_right"
title: "pad_right"
description: "Returns s with fill added at the end until it is width bytes long. fill should be one byte; longer text is returned unchanged."
module: "text"
kind: "fn"
name: "pad_right"
signature: "fn pad_right(string s, int width, string fill) -> Result<string, string>"
import: "use text::{pad_right};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L395"
order: 17
---

Returns `s` with `fill` added at the end until it is `width` bytes long. `fill` should be one byte; longer text is returned unchanged.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `width` | `int` |
| `fill` | `string` |

## Returns

`Result<string, string>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures fill.len() != 1 || ok_len(result) == max_int(width, s.len())
ensures fill.len() == 1 || ok_len(result) == -1
```

## Examples

```coil
use text::{pad_right};
use tests::assert;
assert!((pad_right("ab", 4, ".") ?? "") == "ab..");
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
