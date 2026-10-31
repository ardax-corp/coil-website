---
slug: "regex/regex/captures"
package: "regex"
title: "captures"
description: "re.captures(subject): the groups of the first match, or None."
module: "regex"
kind: "fn"
name: "captures"
signature: "fn captures(Regex re, string subject) -> Result<Option<Vec<string>>, RegexError>"
import: "use regex::{captures};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L808"
order: 7
---

`re.captures(subject)`: the groups of the first match, or `None`.

## Parameters

| Name | Type |
|------|------|
| `re` | `Regex` |
| `subject` | `string` |

## Returns

`Result<Option<Vec<string>>, RegexError>`

## See also

- [`compile`](/packages/regex/reference/regex/compile): Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.
- [`split`](/packages/regex/reference/regex/split): `re.split(subject)`: the pieces of `subject` between matches.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`find_all`](/packages/regex/reference/regex/find_all): `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.
- [`captures_all`](/packages/regex/reference/regex/captures_all): `re.captures_all(subject)`: the groups of every match.
- [`replace`](/packages/regex/reference/regex/replace): `re.replace(subject, template)`: `subject` with its first match replaced.
- [`replace_all`](/packages/regex/reference/regex/replace_all): `re.replace_all(subject, template)`: `subject` with every match replaced.
