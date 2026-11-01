---
slug: "regex/regex/Regex"
package: "regex"
title: "Regex"
description: "A compiled regular expression, made by compile."
module: "regex"
kind: "class"
name: "Regex"
signature: "class Regex"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.coil#L208"
order: 1
---

A compiled regular expression, made by [`compile`](/packages/regex/reference/regex/compile).

Every search method returns a [`Result<_, RegexError>`](/docs/reference/prelude/Result). Match positions are
byte offsets into the UTF-8 subject, not character indices. A `Regex`
remembers its last match ([`expand_template`](/packages/regex/reference/regex/Regex/expand_template) reads it), so it is not safe
to share between threads: compile one per thread. The PCRE2 code and match
data are freed when the `Regex` is dropped.

`Regex` implements [`text::Pattern`](/packages/stdlib/reference/text/Pattern), so the [`text::Searchable`](/packages/stdlib/reference/text/Searchable) string
methods (`contains`, [`split`](/packages/regex/reference/regex/Regex/split), [`replace_all`](/packages/regex/reference/regex/Regex/replace_all), `starts_with`, ...) take it
wherever they take a literal. Those methods panic on a PCRE2 match failure;
call the `Regex` methods to get a [`Result`](/docs/reference/prelude/Result) instead.

## Methods

| Name | Description |
|------|-------------|
| [`split`](/packages/regex/reference/regex/Regex/split) | The pieces of `subject` between matches, in order. |
| [`is_match`](/packages/regex/reference/regex/Regex/is_match) | Whether the pattern matches anywhere in `subject`. |
| [`find`](/packages/regex/reference/regex/Regex/find) | The first match, as `(start, end)` byte offsets; `None` when there is none. |
| [`find_at`](/packages/regex/reference/regex/Regex/find_at) | The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end. |
| [`matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix) | Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`). |
| [`matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix) | Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`). |
| [`expand_template`](/packages/regex/reference/regex/Regex/expand_template) | `template` with `$n`, `${name}` and `$$` expanded from the last successful match of this `Regex`. |
| [`find_all`](/packages/regex/reference/regex/Regex/find_all) | Every non-overlapping match, left to right, as `(start, end)` byte offsets; empty when there is none. |
| [`captures`](/packages/regex/reference/regex/Regex/captures) | The groups of the first match, group 0 (the whole match) first; `None` when there is none. |
| [`captures_all`](/packages/regex/reference/regex/Regex/captures_all) | The groups of every non-overlapping match, one row per match in the shape [`captures`](/packages/regex/reference/regex/Regex/captures) returns; empty when there is none. |
| [`replace`](/packages/regex/reference/regex/Regex/replace) | `subject` with its first match replaced by `template`, expanded as in [`expand_template`](/packages/regex/reference/regex/Regex/expand_template) (`$n`, `${name}`, `$$`); `subject` unchanged when there is no match. |
| [`replace_all`](/packages/regex/reference/regex/Regex/replace_all) | `subject` with every non-overlapping match replaced by `template`, expanded per match as in [`expand_template`](/packages/regex/reference/regex/Regex/expand_template); `subject` unchanged when there is no match. |

## Trait implementations

- `Pattern` for `Regex`

## Examples

```coil
use regex::{compile};
use text::{Searchable};
use tests::assert;
let digits = compile("[0-9]+", "").ok() ?? panic "bad pattern";
assert!(digits.is_match("build 42") == Result::Ok(true));
assert!(digits.find("build 42") == Result::Ok(Option::Some((6, 8))));

// As a `text::Pattern`:
assert!("build 42".contains(digits));
let parts = "a1b22c".split(digits);
assert!(parts.len() == 3 && parts[0] == "a" && parts[2] == "c");
```

## See also

- [`regex::compile`](/packages/regex/reference/regex/compile)
- [`Result`](/docs/reference/prelude/Result)
- [`Regex::expand_template`](/packages/regex/reference/regex/Regex/expand_template)
- [`text::Pattern`](/packages/stdlib/reference/text/Pattern)
- [`text::Searchable`](/packages/stdlib/reference/text/Searchable)
- [`Regex::split`](/packages/regex/reference/regex/Regex/split)
- [`Regex::replace_all`](/packages/regex/reference/regex/Regex/replace_all)
