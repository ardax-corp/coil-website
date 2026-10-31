---
slug: "regex/regex/Regex/expand_template"
package: "regex"
title: "Regex::expand_template"
description: "template with $n, ${name} and $$ expanded from the last successful match of this Regex."
module: "regex"
kind: "method"
name: "expand_template"
parent: "Regex"
signature: "pub fn expand_template(string template) -> Result<string, RegexError>"
import: "use regex::{Regex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3e77f65af30a058a4aaa204c484569ebb6c8ac13/src/regex.hy#L672"
order: 6
---

`template` with `$n`, `${name}` and `$$` expanded from the last successful match of this [`Regex`](/packages/regex/reference/regex/Regex).

`$n` (one or more digits) is group `n`, `${name}` a named group and
`$$` a literal `$`. A group that did not take part, or does not
exist, expands to `""`. A `$` followed by anything else is kept as is.
Before any match every group is `""`.

Called on a `Regex` value as `value.expand_template(…)`.

## Parameters

| Name | Type |
|------|------|
| `template` | `string` |

## Returns

`Result<string, RegexError>`

## Errors

[`RegexError::Runtime`](/packages/regex/reference/regex/RegexError#variant-runtime) for an unterminated `${`.

## Examples

```coil
use regex::{compile};
use tests::assert;
let re = compile("(?<key>\\w+)=(\\d+)", "").ok() ?? panic "bad pattern";
assert!(re.is_match("port=8080") == Result::Ok(true));
assert!(re.expand_template("${key} is $2 ($$)") == Result::Ok("port is 8080 ($)"));
```

## See also

- [`regex::Regex`](/packages/regex/reference/regex/Regex)
- [`regex::RegexError`](/packages/regex/reference/regex/RegexError)
- [`Regex::split`](/packages/regex/reference/regex/Regex/split): The pieces of `subject` between matches, in order.
- [`Regex::is_match`](/packages/regex/reference/regex/Regex/is_match): Whether the pattern matches anywhere in `subject`.
- [`Regex::find`](/packages/regex/reference/regex/Regex/find): The first match, as `(start, end)` byte offsets; `None` when there is none.
- [`Regex::find_at`](/packages/regex/reference/regex/Regex/find_at): The first match at or after byte offset `from`, as `(start, end)` byte offsets; `None` when there is none or `from` is past the end.
- [`Regex::matches_prefix`](/packages/regex/reference/regex/Regex/matches_prefix): Whether a match starts at the beginning of `subject` (PCRE2's `ANCHORED`).
- [`Regex::matches_suffix`](/packages/regex/reference/regex/Regex/matches_suffix): Whether a match ends at the end of `subject` (PCRE2's `ENDANCHORED`).
