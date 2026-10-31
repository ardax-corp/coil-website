---
slug: "regex/regex/Regex/captures"
package: "regex"
title: "Regex::captures"
description: "The groups of the first match, group 0 (the whole match) first; None when there is none."
module: "regex"
kind: "method"
name: "captures"
parent: "Regex"
signature: "pub fn captures(string subject) -> Result<Option<Vec<string>>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L712"
order: 8
---

The groups of the first match, group 0 (the whole match) first; `None` when there is none.

The vector holds group 0 up to the highest group that took part in
the match; an unset group inside that range is `""`.

Called on a `Regex` value as `value.captures(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<Option<Vec<string>>, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("(\\w+)@(\\w+)\\.com", "").ok() ?? panic "bad pattern";
let groups = re.captures("mail ana@example.com").unwrap_or(Option::None) ?? Vec::new();
assert!(groups.len() == 3);
assert!(groups[0] == "ana@example.com" && groups[1] == "ana" && groups[2] == "example");
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
