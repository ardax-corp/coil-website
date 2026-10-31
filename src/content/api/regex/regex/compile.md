---
slug: "regex/regex/compile"
package: "regex"
title: "compile"
description: "Compiles pattern (PCRE2 syntax) with the option letters in flags."
module: "regex"
kind: "fn"
name: "compile"
signature: "fn compile(string pattern, string flags) -> Result<Regex, RegexError>"
import: "use regex::{compile};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3d83b6015655fefd60e8136e2eb9694f7e8a4990/src/regex.hy#L319"
order: 2
---

Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`.

UTF-8 mode is always on. `flags` is any mix of these letters, or `""`:

| Flag | Meaning |
|------|---------|
| `i` | caseless |
| `m` | multiline: `^` and `$` match at each line |
| `s` | `.` also matches a newline |
| `x` | extended: whitespace and `#` comments in the pattern are ignored |
| `u` | Unicode properties for `\w`, `\d`, `\b` and the POSIX classes |

Backslashes are escaped in coil string literals, so the pattern `\d+` is
written `"\\d+"`.

## Parameters

| Name | Type |
|------|------|
| `pattern` | `string` |
| `flags` | `string` |

## Returns

`Result<Regex, RegexError>`

## Errors

[`RegexError::Compile`](/packages/regex/reference/regex/RegexError#variant-compile) for a pattern PCRE2 rejects or an unknown flag
letter; [`RegexError::Runtime`](/packages/regex/reference/regex/RegexError#variant-runtime) when libpcre2-8 cannot be loaded.

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("hello", "i").ok() ?? panic "bad pattern";
assert!(re.is_match("Say HELLO") == Result::Ok(true));
assert!(compile("(unclosed", "").is_err());
```

## See also

- [`regex::RegexError`](/packages/regex/reference/regex/RegexError)
- [`split`](/packages/regex/reference/regex/split): `re.split(subject)`: the pieces of `subject` between matches.
- [`is_match`](/packages/regex/reference/regex/is_match): `re.is_match(subject)`: whether `re` matches anywhere in `subject`.
- [`find`](/packages/regex/reference/regex/find): `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`.
- [`find_all`](/packages/regex/reference/regex/find_all): `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets.
- [`captures`](/packages/regex/reference/regex/captures): `re.captures(subject)`: the groups of the first match, or `None`.
- [`captures_all`](/packages/regex/reference/regex/captures_all): `re.captures_all(subject)`: the groups of every match.
- [`replace`](/packages/regex/reference/regex/replace): `re.replace(subject, template)`: `subject` with its first match replaced.
