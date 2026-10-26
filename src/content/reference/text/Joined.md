---
slug: "text/Joined"
title: "Joined"
description: "parts.join(sep) on Vec<string>."
module: "text"
kind: "trait"
name: "Joined"
signature: "trait Joined<V>"
import: "use text::{Joined};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/text.hy#L967"
order: 4
---

`parts.join(sep)` on [`Vec<string>`](/docs/reference/prelude/Vec).

## Required methods

| Name | Description |
|------|-------------|
| [`join`](/docs/reference/text/Joined/join) | Returns the parts concatenated with `sep` between each pair. |

## Examples

```coil
use text::{Joined};
use tests::assert;
let parts: Vec<string> = ["usr", "local", "bin"];
assert!(parts.join("/") == "usr/local/bin");
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Pattern`](/docs/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
