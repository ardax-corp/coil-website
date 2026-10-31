---
slug: "regex/regex/split"
package: "regex"
title: "split"
description: "re.split(subject): the pieces of subject between matches."
module: "regex"
kind: "fn"
name: "split"
signature: "fn split(Regex re, string subject) -> Result<Vec<string>, RegexError>"
import: "use regex::{split};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3e77f65af30a058a4aaa204c484569ebb6c8ac13/src/regex.hy#L777"
order: 3
---

`re.split(subject)`: the pieces of `subject` between matches.

## Parameters

| Name | Type |
|------|------|
| `re` | `Regex` |
| `subject` | `string` |

## Returns

`Result<Vec<string>, RegexError>`

## See also

- [`compile`](/packages/regex/reference/regex/compile): Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`find_all`](/packages/regex/reference/regex/find_all): `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.
- [`captures`](/packages/regex/reference/regex/captures): `re.captures(subject)`: the groups of the first match, or `None`.
- [`captures_all`](/packages/regex/reference/regex/captures_all): `re.captures_all(subject)`: the groups of every match.
- [`replace`](/packages/regex/reference/regex/replace): `re.replace(subject, template)`: `subject` with its first match replaced.
- [`replace_all`](/packages/regex/reference/regex/replace_all): `re.replace_all(subject, template)`: `subject` with every match replaced.
