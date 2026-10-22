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
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/text.hy#L228"
order: 12
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

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`slice`](/docs/reference/text/slice): Returns the part of `s` from byte offset `start` up to (not including) `end`.
- [`trim_start`](/docs/reference/text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last `needle` in `hay`, or `-1`.
- [`split_at`](/docs/reference/text/split_at): Splits `s` at byte offset `at` into the part before and the part from `at` on.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
