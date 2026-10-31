---
slug: "regex/regex/Regex/split"
package: "regex"
title: "Regex::split"
description: "The pieces of subject between matches, in order."
module: "regex"
kind: "method"
name: "split"
parent: "Regex"
signature: "pub fn split(string subject) -> Result<Vec<string>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L538"
order: 0
---

The pieces of `subject` between matches, in order.

The text before the first match and after the last one are kept, so
a match at either end gives an empty first or last piece, and `subject`
without a match is one piece.

Called on a `Regex` value as `value.split(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<Vec<string>, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let sep = compile("\\s*,\\s*", "").ok() ?? panic "bad pattern";
let parts = sep.split("a , b,c").unwrap_or(Vec::new());
assert!(parts.len() == 3);
assert!(parts[0] == "a" && parts[1] == "b" && parts[2] == "c");
```

## See also

- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
- [`Regex::find_all`](/packages/regex/reference/regex/Regex/find_all): Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none.
