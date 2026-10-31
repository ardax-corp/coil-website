---
slug: "regex/regex/Regex/matches_suffix"
package: "regex"
title: "Regex::matches_suffix"
description: "Whether a match ends at the end of subject (PCRE2's ENDANCHORED). Backs string.ends_with(re)."
module: "regex"
kind: "method"
name: "matches_suffix"
parent: "Regex"
signature: "pub fn matches_suffix(string subject) -> Result<bool, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3e77f65af30a058a4aaa204c484569ebb6c8ac13/src/regex.hy#L647"
order: 5
---

Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`). Backs `string.ends_with(re)`.

A match ending at the end is found even when an earlier, shorter match
does not end there: `a|ab` is a suffix of `"xab"`.

Called on a `Regex` value as `value.matches_suffix(…)`.

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
let re = compile("a|ab", "").ok() ?? panic "bad pattern";
assert!(re.matches_suffix("xab") == Result::Ok(true));
assert!(re.matches_suffix("abx") == Result::Ok(false));
```

## See also

- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
- [`Regex::find_all`](/packages/regex/reference/regex/Regex/find_all): Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none.
