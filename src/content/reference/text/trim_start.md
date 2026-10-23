---
slug: "text/trim_start"
title: "trim_start"
description: "Returns s without leading ASCII whitespace (space, tab, CR, LF)."
module: "text"
kind: "fn"
name: "trim_start"
signature: "fn trim_start(string s) -> Result<string, string>"
import: "use text::{trim_start};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/text.hy#L130"
order: 5
---

Returns `s` without leading ASCII whitespace (space, tab, CR, LF).

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
use text::{trim_start};
use tests::assert;
assert!((trim_start("  hi ") ?? "") == "hi ");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`slice`](/docs/reference/text/slice): Returns the part of `s` from byte offset `start` up to (not including) `end`.
- [`trim_end`](/docs/reference/text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last `needle` in `hay`, or `-1`.
- [`split_at`](/docs/reference/text/split_at): Splits `s` at byte offset `at` into the part before and the part from `at` on.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
- [`repeat`](/docs/reference/text/repeat): Returns `s` repeated `n` times; empty when `n <= 0`.
