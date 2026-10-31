---
slug: "regex/regex/Regex/is_match"
package: "regex"
title: "Regex::is_match"
description: "Whether the pattern matches anywhere in subject."
module: "regex"
kind: "method"
name: "is_match"
parent: "Regex"
signature: "pub fn is_match(string subject) -> Result<bool, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L566"
order: 1
---

Whether the pattern matches anywhere in `subject`.

Anchor the pattern (`^...$`) to test the whole string.

Called on a `Regex` value as `value.is_match(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<bool, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("^[a-z]+$", "").ok() ?? panic "bad pattern";
assert!(re.is_match("coil") == Result::Ok(true));
assert!(re.is_match("coil 1") == Result::Ok(false));
```

## See also

- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
- [`Regex::find_all`](/packages/regex/reference/regex/Regex/find_all): Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none.
