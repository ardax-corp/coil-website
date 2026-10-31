---
slug: "regex/regex/Regex/find_all"
package: "regex"
title: "Regex::find_all"
description: "Every non-overlapping match, left to right, as (start, end) byte offsets; empty when there is none."
module: "regex"
kind: "method"
name: "find_all"
parent: "Regex"
signature: "pub fn find_all(string subject) -> Result<Vec<(int, int)>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L692"
order: 7
---

Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none.

After an empty match the search moves on by one character, so a
pattern that can match `""` still ends.

Called on a `Regex` value as `value.find_all(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<Vec<(int, int)>, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("[0-9]+", "").ok() ?? panic "bad pattern";
let spans = re.find_all("a1 b22 c333").unwrap_or(Vec::new());
assert!(spans.len() == 3);
assert!(spans[1] == (4, 6));
```

## See also

- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
