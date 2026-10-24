---
slug: "text/index"
title: "text"
description: "String helpers: trim, split, find, replace, join, pad, case."
module: "text"
kind: "module"
name: "text"
origin: "stdlib"
auto: false
order: 39
---

Offsets are byte offsets, as everywhere in Coil. Functions that cut a string return a [`Result`](/docs/reference/prelude/Result), because a cut inside a multi-byte character is an error. The compiler-provided [`string`](/docs/reference/string) module has `format` and the UTF-8 conversions.

Part of [coil-stdlib](/packages/stdlib). spool projects get it automatically; with plain `coil`, pass `--root ~/.coil/stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use text::{Span, Pattern};
```

## Types

| Name | Description |
|------|-------------|
| [`Span`](/docs/reference/text/Span) | A match: the byte offsets `start..end` of the matched text. |

## Traits

| Name | Description |
|------|-------------|
| [`Pattern`](/docs/reference/text/Pattern) | Something a [[`Searchable`](/docs/reference/text/Searchable)] value can be searched for: a plain [`string`](/docs/reference/types/string) (matched literally), or a type such as coil-regex's `Regex`. |
| [`Searchable`](/docs/reference/text/Searchable) | Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [[`Show`](/docs/reference/prelude/ops/Show)] type, which search its display form. |

## Functions

| Name | Description |
|------|-------------|
| [`byte_len`](/docs/reference/text/byte_len) | Returns the length of `s` in bytes; the same as `s.len()`. |
| [`slice`](/docs/reference/text/slice) | Returns the part of `s` from byte offset `start` up to (not including) `end`. |
| [`trim_start`](/docs/reference/text/trim_start) | Returns `s` without leading ASCII whitespace (space, tab, CR, LF). |
| [`trim_end`](/docs/reference/text/trim_end) | Returns `s` without trailing ASCII whitespace (space, tab, CR, LF). |
| [`trim`](/docs/reference/text/trim) | Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF). |
| [`rfind`](/docs/reference/text/rfind) | Returns the byte offset of the last `needle` in `hay`, or `-1`. |
| [`split_at`](/docs/reference/text/split_at) | Splits `s` at byte offset `at` into the part before and the part from `at` on. |
| [`join`](/docs/reference/text/join) | Returns the `parts` concatenated with `sep` between each pair. |
| [`repeat`](/docs/reference/text/repeat) | Returns `s` repeated `n` times; empty when `n <= 0`. |
| [`pad_left`](/docs/reference/text/pad_left) | Returns `s` with `fill` added in front until it is `width` bytes long. |
| [`pad_right`](/docs/reference/text/pad_right) | Returns `s` with `fill` added at the end until it is `width` bytes long. |
| [`lines`](/docs/reference/text/lines) | Splits `s` into lines at each LF, dropping one CR before it (so CRLF works too). |
| [`concat`](/docs/reference/text/concat) | Returns `a` followed by `b`; the same as `a + b`. |
| [`eq`](/docs/reference/text/eq) | Returns `true` when `a` and `b` hold the same bytes; the same as `a == b`. |
| [`to_lower`](/docs/reference/text/to_lower) | Returns `s` with ASCII `A`-`Z` turned into `a`-`z`; other characters are unchanged. |
| [`to_upper`](/docs/reference/text/to_upper) | Returns `s` with ASCII `a`-`z` turned into `A`-`Z`; other characters are unchanged. |
