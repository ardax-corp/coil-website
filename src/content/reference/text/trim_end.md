---
slug: "text/trim_end"
title: "trim_end"
description: "Returns s without trailing ASCII whitespace (space, tab, CR, LF)."
module: "text"
kind: "fn"
name: "trim_end"
signature: "fn trim_end(string s) -> Result<string, string>"
import: "use text::{trim_end};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/text.hy#L153"
order: 6
---

Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).

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
use text::{trim_end};
use tests::assert;
assert!((trim_end(" hi \n") ?? "") == " hi");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`slice`](/docs/reference/text/slice): Returns the part of `s` from byte offset `start` up to (not including) `end`.
- [`trim_start`](/docs/reference/text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last `needle` in `hay`, or `-1`.
- [`split_at`](/docs/reference/text/split_at): Splits `s` at byte offset `at` into the part before and the part from `at` on.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
- [`repeat`](/docs/reference/text/repeat): Returns `s` repeated `n` times; empty when `n <= 0`.
