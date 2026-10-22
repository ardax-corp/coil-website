---
slug: "text/pad_left"
title: "pad_left"
description: "Returns s with fill added in front until it is width bytes long. fill should be one byte; longer text is returned unchanged."
module: "text"
kind: "fn"
name: "pad_left"
signature: "fn pad_left(string s, int width, string fill) -> Result<string, string>"
import: "use text::{pad_left};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L376"
order: 16
---

Returns `s` with `fill` added in front until it is `width` bytes long. `fill` should be one byte; longer text is returned unchanged.

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
use text::{pad_left};
use tests::assert;
assert!((pad_left("7", 3, "0") ?? "") == "007");
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
