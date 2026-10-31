---
slug: "regex/regex/find_all"
package: "regex"
title: "find_all"
description: "re.find_all(subject): every non-overlapping match as (start, end) byte offsets."
module: "regex"
kind: "fn"
name: "find_all"
signature: "fn find_all(Regex re, string subject) -> Result<Vec<(int, int)>, RegexError>"
import: "use regex::{find_all};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L803"
order: 6
---

`re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.

## Parameters

| Name | Type |
|------|------|
| `re` | `Regex` |
| `subject` | `string` |

## Returns

`Result<Vec<(int, int)>, RegexError>`

## Examples

```coil
use regex::{compile, find_all};
use tests::assert;
let re = compile("o+", "").ok() ?? panic "bad pattern";
let spans = find_all(re, "foo boo").unwrap_or(Vec::new());
assert!(spans.len() == 2 && spans[0] == (1, 3));
```

## See also

- [`compile`](/packages/regex/reference/regex/compile): Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.
- [`split`](/packages/regex/reference/regex/split): `re.split(subject)`: the pieces of `subject` between matches.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`captures`](/packages/regex/reference/regex/captures): `re.captures(subject)`: the groups of the first match, or `None`.
- [`captures_all`](/packages/regex/reference/regex/captures_all): `re.captures_all(subject)`: the groups of every match.
- [`replace`](/packages/regex/reference/regex/replace): `re.replace(subject, template)`: `subject` with its first match replaced.
- [`replace_all`](/packages/regex/reference/regex/replace_all): `re.replace_all(subject, template)`: `subject` with every match replaced.
