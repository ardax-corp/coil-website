---
slug: "regex/regex/Regex/find_at"
package: "regex"
title: "Regex::find_at"
description: "The first match at or after byte offset from, as (start, end) byte offsets; None when there is none or from is past the end."
module: "regex"
kind: "method"
name: "find_at"
parent: "Regex"
signature: "pub fn find_at(string subject, int from) -> Result<Option<(int, int)>, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L609"
order: 3
---

The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.

Lookbehinds and `\b` still see the text before `from`.

Called on a `Regex` value as `value.find_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `subject` | `string` |
| `from` | `int` |

## Returns

`Result<Option<(int, int)>, RegexError>`

## Errors

[`RegexError::Runtime`](/packages/regex/reference/regex/RegexError#variant-runtime) when `from` is negative or inside a UTF-8
sequence.

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("o", "").ok() ?? panic "bad pattern";
assert!(re.find_at("foo", 2) == Result::Ok(Option::Some((2, 3))));
assert!(re.find_at("foo", 3) == Result::Ok(Option::None));
```

## See also

- [`regex::RegexError`](/packages/regex/reference/regex/RegexError)
- [`Regex`](/packages/regex/reference/regex/Regex): A compiled regular expression, made by `compile`.
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template): `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`.
