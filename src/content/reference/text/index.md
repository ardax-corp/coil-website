---
slug: "text/index"
title: "text"
description: "The text module."
module: "text"
kind: "module"
name: "text"
origin: "stdlib"
auto: false
order: 26
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use text::{ok_len, byte_len};
```

## Functions

| Name | Description |
|------|-------------|
| [`ok_len`](/docs/reference/text/ok_len) | Length of an `Ok` string, `-1` for an `Err` (for contracts). |
| [`byte_len`](/docs/reference/text/byte_len) | Byte length of UTF-8 `s` (same as `to_bytes(s).len()`). |
| [`slice`](/docs/reference/text/slice) | Slice by byte offsets; returns `Err` if the slice is not valid UTF-8. |
| [`trim_start`](/docs/reference/text/trim_start) | Trim ASCII whitespace from the start. |
| [`trim_end`](/docs/reference/text/trim_end) | Trim ASCII whitespace from the end. |
| [`trim`](/docs/reference/text/trim) | Trim ASCII whitespace (space/tab/CR/LF) from both ends. |
| [`contains`](/docs/reference/text/contains) | True when `hay` contains `needle` as a byte-exact substring. |
| [`starts_with`](/docs/reference/text/starts_with) | True when `s` begins with `prefix` (byte identity). |
| [`ends_with`](/docs/reference/text/ends_with) | True when `s` ends with `suffix` (byte identity). |
| [`find`](/docs/reference/text/find) | First byte offset of `needle` in `hay`, or `-1`. |
| [`rfind`](/docs/reference/text/rfind) | Last byte offset of `needle` in `hay`, or `-1`. |
| [`split_at`](/docs/reference/text/split_at) | Split at byte offset `at` into `(left, right)`. |
| [`split`](/docs/reference/text/split) | Split `s` on every occurrence of `sep` (byte-exact). |
| [`split_once`](/docs/reference/text/split_once) | Split at the first occurrence of `sep`, excluding the separator. |
| [`replace`](/docs/reference/text/replace) | Replace every non-overlapping occurrence of `old` with `new`. |
| [`join`](/docs/reference/text/join) | Join strings with `sep` between adjacent parts. |
| [`repeat`](/docs/reference/text/repeat) | Repeat `s` `n` times. |
| [`pad_left`](/docs/reference/text/pad_left) | Pad on the left to a byte width using a one-byte `fill` string. |
| [`pad_right`](/docs/reference/text/pad_right) | Pad on the right to a byte width using a one-byte `fill` string. |
| [`lines`](/docs/reference/text/lines) | Split on LF and strip one optional CR from each resulting line. |
| [`concat`](/docs/reference/text/concat) | Concatenate two strings. |
| [`eq`](/docs/reference/text/eq) | True when strings are equal (byte identity). |
| [`to_lower`](/docs/reference/text/to_lower) | ASCII lower-case A..=Z only; other bytes unchanged. |
| [`to_upper`](/docs/reference/text/to_upper) | ASCII upper-case a..=z only; other bytes unchanged. |
