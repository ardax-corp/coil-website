---
slug: "regex/regex/Regex/captures_all"
package: "regex"
title: "Regex::captures_all"
description: "The groups of every non-overlapping match, one row per match in the shape captures returns; empty when there is none."
module: "regex"
kind: "method"
name: "captures_all"
parent: "Regex"
signature: "pub fn captures_all(string subject) -> Result<Vec<Vec<string>>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.coil#L732"
order: 9
---

The groups of every non-overlapping match, one row per match in the shape [`captures`](/packages/regex/reference/regex/Regex/captures) returns; empty when there is none.

Called on a `Regex` value as `value.captures_all(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<Vec<Vec<string>>, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("(\\w)=(\\d)", "").ok() ?? panic "bad pattern";
let rows = re.captures_all("a=1 b=2").unwrap_or(Vec::new());
assert!(rows.len() == 2);
assert!(rows[1][1] == "b" && rows[1][2] == "2");
```

## See also

- [`Regex::captures`](/packages/regex/reference/regex/Regex/captures)
- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
