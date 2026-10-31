---
slug: "stdlib/text/Pattern"
package: "stdlib"
title: "Pattern"
description: "Something a [Searchable] value can be searched for: a plain string (matched literally), or a type such as coil-regex's Regex."
module: "text"
kind: "trait"
name: "Pattern"
signature: "trait Pattern<P>"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.hy#L474"
order: 1
---

Something a [[`Searchable`](/packages/stdlib/reference/text/Searchable)] value can be searched for: a plain [`string`](/docs/reference/types/string) (matched literally), or a type such as coil-regex's `Regex`.

Spans are byte offsets into the searched string, on
character boundaries. Searching from `from` finds the leftmost match that
starts at or after `from`.

## Required methods

| Name | Description |
|------|-------------|
| [`find_in`](/packages/stdlib/reference/text/Pattern/find_in) | Returns the span of the leftmost match in `hay` at or after byte `from`. |
| [`is_prefix_of`](/packages/stdlib/reference/text/Pattern/is_prefix_of) | Returns `true` when a match starts at the beginning of `hay`. |
| [`is_suffix_of`](/packages/stdlib/reference/text/Pattern/is_suffix_of) | Returns `true` when a match ends at the end of `hay`. |
| [`expand`](/packages/stdlib/reference/text/Pattern/expand) | Returns the replacement text for the match [`find_in`](/packages/stdlib/reference/text/Pattern/find_in) just returned. |

## Examples

```coil
use text::{Pattern, Span};
use tests::assert;
let at = "-".find_in("a-b-c", 2) ?? new Span(0, 0);
assert!(at.start == 3 && at.end == 4);
```

## See also

- [`text::Searchable`](/packages/stdlib/reference/text/Searchable)
- [`string`](/docs/reference/types/string)
- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Joined`](/packages/stdlib/reference/text/Joined): `parts.join(sep)` on `Vec<string>`.
