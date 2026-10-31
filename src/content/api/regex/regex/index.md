---
slug: "regex/regex/index"
package: "regex"
title: "regex"
description: "PCRE2 regular expressions: compile once, then find, capture, split and replace."
module: "regex"
kind: "module"
name: "regex"
origin: "package"
auto: false
order: 0
---

Part of the [regex](/packages/regex) package ([coil-regex](https://github.com/ardax-corp/coil-regex)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/regex)).

Import what you use (`use path::*` is not allowed):

```coil
use regex::{RegexError, Regex};
```

## Types

| Name | Description |
|------|-------------|
| [`RegexError`](/packages/regex/reference/regex/RegexError) | The error of every fallible `regex` call. |
| [`Regex`](/packages/regex/reference/regex/Regex) | A compiled regular expression, made by [`compile`](/packages/regex/reference/regex/compile). |

## Functions

| Name | Description |
|------|-------------|
| [`compile`](/packages/regex/reference/regex/compile) | Compiles `pattern` (PCRE2 syntax) with the option letters in `flags`. |
| [`split`](/packages/regex/reference/regex/split) | `re.split(subject)`: the pieces of `subject` between matches. |
| [`is_match`](/packages/regex/reference/regex/is_match) | `re.is_match(subject)`: whether `re` matches anywhere in `subject`. |
| [`find`](/packages/regex/reference/regex/find) | `re.find(subject)`: the first match as `(start, end)` byte offsets, or `None`. |
| [`find_all`](/packages/regex/reference/regex/find_all) | `re.find_all(subject)`: every non-overlapping match as `(start, end)` byte offsets. |
| [`captures`](/packages/regex/reference/regex/captures) | `re.captures(subject)`: the groups of the first match, or `None`. |
| [`captures_all`](/packages/regex/reference/regex/captures_all) | `re.captures_all(subject)`: the groups of every match. |
| [`replace`](/packages/regex/reference/regex/replace) | `re.replace(subject, template)`: `subject` with its first match replaced. |
| [`replace_all`](/packages/regex/reference/regex/replace_all) | `re.replace_all(subject, template)`: `subject` with every match replaced. |
