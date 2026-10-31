---
slug: "regex/regex/replace"
package: "regex"
title: "replace"
description: "re.replace(subject, template): subject with its first match replaced."
module: "regex"
kind: "fn"
name: "replace"
signature: "fn replace(Regex re, string subject, string template) -> Result<string, RegexError>"
import: "use regex::{replace};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L818"
order: 9
---

`re.replace(subject, template)`: `subject` with its first match replaced.

## Parameters

| Name | Type |
|------|------|
| `re` | `Regex` |
| `subject` | `string` |
| `template` | `string` |

## Returns

`Result<string, RegexError>`

## See also

- [`compile`](/packages/regex/reference/regex/compile): Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.
- [`split`](/packages/regex/reference/regex/split): `re.split(subject)`: the pieces of `subject` between matches.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`find_all`](/packages/regex/reference/regex/find_all): `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.
- [`captures`](/packages/regex/reference/regex/captures): `re.captures(subject)`: the groups of the first match, or `None`.
- [`captures_all`](/packages/regex/reference/regex/captures_all): `re.captures_all(subject)`: the groups of every match.
- [`replace_all`](/packages/regex/reference/regex/replace_all): `re.replace_all(subject, template)`: `subject` with every match replaced.
