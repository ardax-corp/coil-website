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
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/text.hy#L195"
order: 8
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

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`slice`](/docs/reference/text/slice): Returns the part of `s` from byte offset `start` up to (not including) `end`.
- [`trim_start`](/docs/reference/text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`split_at`](/docs/reference/text/split_at): Splits `s` at byte offset `at` into the part before and the part from `at` on.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
- [`repeat`](/docs/reference/text/repeat): Returns `s` repeated `n` times; empty when `n <= 0`.
