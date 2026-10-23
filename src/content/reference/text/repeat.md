---
slug: "text/repeat"
title: "repeat"
description: "Returns s repeated n times; empty when n <= 0."
module: "text"
kind: "fn"
name: "repeat"
signature: "fn repeat(string s, int n) -> string"
import: "use text::{repeat};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/text.hy#L271"
order: 11
---

Returns `s` repeated `n` times; empty when `n <= 0`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `n` | `int` |

## Returns

`string`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures n > 0 || result == ""
ensures n <= 0 || result.len() == s.len() * n
```

## Examples

```coil
use text::{repeat};
use tests::assert;
assert!(repeat("ab", 3) == "ababab");
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
