---
slug: "stdlib/text/index"
package: "stdlib"
title: "text"
description: "String helpers: trim, split, find, replace, join, pad, case."
module: "text"
kind: "module"
name: "text"
origin: "stdlib"
auto: false
order: 25
---

Offsets are byte offsets, as everywhere in Coil. Functions that cut a string return a [`Result`](/docs/reference/prelude/Result), because a cut inside a multi-byte character is an error. The compiler-provided [`string`](/docs/reference/string) module has `format` and the UTF-8 conversions.

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use text::{Span, Pattern};
```

## Types

| Name | Description |
|------|-------------|
| [`Span`](/packages/stdlib/reference/text/Span) | A match: the byte offsets `start..end` of the matched text. |

## Traits

| Name | Description |
|------|-------------|
| [`Pattern`](/packages/stdlib/reference/text/Pattern) | Something a [[`Searchable`](/packages/stdlib/reference/text/Searchable)] value can be searched for: a plain [`string`](/docs/reference/types/string) (matched literally), or a type such as coil-regex's `Regex`. |
| [`Searchable`](/packages/stdlib/reference/text/Searchable) | Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [[`Show`](/docs/reference/prelude/ops/Show)] type, which search its display form. |
| [`Text`](/packages/stdlib/reference/text/Text) | String methods on [`string`](/docs/reference/types/string): trimming, case mapping, padding, line splitting, repeating and byte slicing. |
| [`Joined`](/packages/stdlib/reference/text/Joined) | `parts.join(sep)` on [`Vec<string>`](/docs/reference/prelude/Vec). |

## Functions

| Name | Description |
|------|-------------|
| [`from_codepoints`](/packages/stdlib/reference/text/from_codepoints) | Returns the string whose characters are the code points `cps`. |
