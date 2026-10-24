---
slug: "text/Pattern"
title: "Pattern"
description: "Something a [Searchable] value can be searched for: a plain string (matched literally), or a type such as coil-regex's Regex."
module: "text"
kind: "trait"
name: "Pattern"
signature: "trait Pattern<P>"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/text.hy#L490"
order: 1
---

Something a [[`Searchable`](/docs/reference/text/Searchable)] value can be searched for: a plain [`string`](/docs/reference/types/string) (matched literally), or a type such as coil-regex's `Regex`.

Spans are byte offsets into the searched string, on
character boundaries. Searching from `from` finds the leftmost match that
starts at or after `from`.

## Required methods

| Name | Description |
|------|-------------|
| [`find_in`](/docs/reference/text/Pattern/find_in) | Returns the span of the leftmost match in `hay` at or after byte `from`. |
| [`is_prefix_of`](/docs/reference/text/Pattern/is_prefix_of) | Returns `true` when a match starts at the beginning of `hay`. |
| [`is_suffix_of`](/docs/reference/text/Pattern/is_suffix_of) | Returns `true` when a match ends at the end of `hay`. |
| [`expand`](/docs/reference/text/Pattern/expand) | Returns the replacement text for the match [`find_in`](/docs/reference/text/Pattern/find_in) just returned. |

## Examples

```coil
use text::{Pattern, Span};
use tests::assert;
let at = "-".find_in("a-b-c", 2) ?? new Span(0, 0);
assert!(at.start == 3 && at.end == 4);
```

## See also

- [`text::Searchable`](/docs/reference/text/Searchable)
- [`string`](/docs/reference/types/string)
