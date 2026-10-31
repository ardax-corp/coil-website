---
slug: "regex/regex/Regex/find"
package: "regex"
title: "Regex::find"
description: "The first match, as (start, end) byte offsets; None when there is none."
module: "regex"
kind: "method"
name: "find"
parent: "Regex"
signature: "pub fn find(string subject) -> Result<Option<(int, int)>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3e77f65af30a058a4aaa204c484569ebb6c8ac13/src/regex.hy#L586"
order: 2
---

The first match, as `(start, end)` byte offsets; `None` when there is none.

`subject[start..end]` is the matched text. The start is where the
match began, so a pattern using `\K` reports the span from before the
`\K`.

Called on a `Regex` value as `value.find(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |

## Returns

`Result<Option<(int, int)>, RegexError>`

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("[0-9]+", "").ok() ?? panic "bad pattern";
assert!(re.find("id 314") == Result::Ok(Option::Some((3, 6))));
assert!(re.find("none") == Result::Ok(Option::None));
```

## See also

- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
- [`Regex::find_all`](/packages/regex/reference/regex/Regex/find_all): Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none.
