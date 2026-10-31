---
slug: "regex/regex/captures_all"
package: "regex"
title: "captures_all"
description: "re.captures_all(subject): the groups of every match."
module: "regex"
kind: "fn"
name: "captures_all"
signature: "fn captures_all(Regex re, string subject) -> Result<Vec<Vec<string>>, RegexError>"
import: "use regex::{captures_all};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L813"
order: 8
---

`re.captures_all(subject)`: the groups of every match.

## Parameters

| Name | Type |
|------|------|
| `re` | `Regex` |
| `subject` | `string` |

## Returns

`Result<Vec<Vec<string>>, RegexError>`

## See also

- [`compile`](/packages/regex/reference/regex/compile): Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.
- [`split`](/packages/regex/reference/regex/split): `re.split(subject)`: the pieces of `subject` between matches.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`find_all`](/packages/regex/reference/regex/find_all): `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.
- [`captures`](/packages/regex/reference/regex/captures): `re.captures(subject)`: the groups of the first match, or `None`.
- [`replace`](/packages/regex/reference/regex/replace): `re.replace(subject, template)`: `subject` with its first match replaced.
- [`replace_all`](/packages/regex/reference/regex/replace_all): `re.replace_all(subject, template)`: `subject` with every match replaced.
