---
slug: "regex/regex/RegexError"
package: "regex"
title: "RegexError"
description: "The error of every fallible regex call."
module: "regex"
kind: "enum"
name: "RegexError"
signature: "enum RegexError"
import: "use regex::{RegexError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-regex/blob/3e77f65af30a058a4aaa204c484569ebb6c8ac13/src/regex.hy#L168"
order: 0
---

The error of every fallible [`regex`](/packages/regex/reference/regex) call.

Not finding a match is not an error: [`find`](/packages/regex/reference/regex/find) and [`captures`](/packages/regex/reference/regex/captures) return
`Ok(None)`, [`find_all`](/packages/regex/reference/regex/find_all) an empty vector, and [`is_match`](/packages/regex/reference/regex/is_match) `Ok(false)`.

## Variants

### `Compile` {#variant-compile}

The pattern does not compile, or the flags hold a letter other than
`i`, `m`, `s`, `x` or `u`.

### `Runtime` {#variant-runtime}

PCRE2 failed while matching (for example, it hit its match limit),
libpcre2-8 could not be loaded, or a replacement template has an
unterminated `${`.

### `Utf8` {#variant-utf8}

A capture or slice of the subject is not valid UTF-8.

## Examples

```coil
use regex::{compile, RegexError};
use tests::assert;
assert!(compile("(", "").err() == Option::Some(RegexError::Compile));
assert!(compile("a", "Z").err() == Option::Some(RegexError::Compile));
```

## See also

- [`regex`](/packages/regex/reference/regex)
- [`regex::find`](/packages/regex/reference/regex/find)
- [`regex::captures`](/packages/regex/reference/regex/captures)
- [`regex::find_all`](/packages/regex/reference/regex/find_all)
- [`regex::is_match`](/packages/regex/reference/regex/is_match)
