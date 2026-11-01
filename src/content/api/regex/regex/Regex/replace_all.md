---
slug: "regex/regex/Regex/replace_all"
package: "regex"
title: "Regex::replace_all"
description: "subject with every non-overlapping match replaced by template, expanded per match as in expand_template; subject unchanged when there is no match."
module: "regex"
kind: "method"
name: "replace_all"
parent: "Regex"
signature: "pub fn replace_all(string subject, string template) -> Result<string, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.coil#L771"
order: 11
---

`subject` with every non-overlapping match replaced by `template`, expanded per match as in [`expand_template`](/packages/regex/reference/regex/Regex/expand_template); `subject` unchanged when there is no match.

Called on a `Regex` value as `value.replace_all(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |
| `template` | `string` |

## Returns

`Result<string, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("(\\w)=(\\d)", "").ok() ?? panic "bad pattern";
assert!(re.replace_all("a=1 b=2", "$2:$1") == Result::Ok("1:a 2:b"));
```

## See also

- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template)
- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
