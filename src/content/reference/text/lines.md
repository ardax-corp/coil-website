---
slug: "text/lines"
title: "lines"
description: "Splits s into lines at each LF, dropping one CR before it (so CRLF works too). A final LF ends the last line rather than starting an empty one, so \"a\\nb\\n\" and \"a\\nb\" both give two lines, and \"\" gives none."
module: "text"
kind: "fn"
name: "lines"
signature: "fn lines(string s) -> Result<Vec<string>, string>"
import: "use text::{lines};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/text.hy#L345"
order: 14
---

Splits `s` into lines at each LF, dropping one CR before it (so CRLF works too). A final LF ends the last line rather than starting an empty one, so `"a\nb\n"` and `"a\nb"` both give two lines, and `""` gives none.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<string>, string>`

## Examples

```coil
use text::{lines};
use tests::assert;
let ls = lines("one\r\ntwo\nthree") ?? Vec::new();
assert!(ls.len() == 3);
assert!(ls[0] == "one");
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
