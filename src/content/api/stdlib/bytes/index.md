---
slug: "stdlib/bytes/index"
package: "stdlib"
title: "bytes"
description: "Helpers for Vec<byte> buffers: search, slice, replace, pad, hex."
module: "bytes"
kind: "module"
name: "bytes"
origin: "stdlib"
auto: false
order: 2
---

Byte buffers are [`Vec<byte>`](/docs/reference/prelude/Vec). Offsets are byte offsets, and nothing here knows about UTF-8; use [`text`](/packages/stdlib/reference/text) for strings. A string literal can be passed where a [`Vec<byte>`](/docs/reference/prelude/Vec) is expected.

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use bytes::{Bytes, region_eq};
```

## Types

| Name | Description |
|------|-------------|
| [`Bytes`](/packages/stdlib/reference/bytes/Bytes) | A wrapper around a [`Vec<byte>`](/docs/reference/prelude/Vec), for APIs that want a distinct byte-buffer type. |

## Functions

| Name | Description |
|------|-------------|
| [`region_eq`](/packages/stdlib/reference/bytes/region_eq) | True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds). |
| [`to_hex`](/packages/stdlib/reference/bytes/to_hex) | Encodes `buf` as lowercase hexadecimal, two digits per byte. |
| [`from_hex`](/packages/stdlib/reference/bytes/from_hex) | Decodes hexadecimal text (either case) into bytes. |
| [`slice`](/packages/stdlib/reference/bytes/slice) | Returns a copy of `src[start..end]` (end exclusive), with both offsets clamped to the buffer. |
| [`concat`](/packages/stdlib/reference/bytes/concat) | Returns a new buffer holding `a` followed by `b`. |
| [`eq`](/packages/stdlib/reference/bytes/eq) | Returns `true` when `a` and `b` have the same length and the same bytes. |
| [`find_from`](/packages/stdlib/reference/bytes/find_from) | Returns the offset of the first `needle` in `hay` at or after `start`, or `None`. |
| [`find`](/packages/stdlib/reference/bytes/find) | Returns the offset of the first `needle` in `hay`, or `None`. |
| [`rfind`](/packages/stdlib/reference/bytes/rfind) | Returns the offset of the last `needle` in `hay`, or `None`. |
| [`contains`](/packages/stdlib/reference/bytes/contains) | Returns `true` when `needle` occurs in `hay`. |
| [`starts_with`](/packages/stdlib/reference/bytes/starts_with) | Returns `true` when `buf` begins with `prefix`. |
| [`ends_with`](/packages/stdlib/reference/bytes/ends_with) | Returns `true` when `buf` ends with `suffix`. |
| [`copy`](/packages/stdlib/reference/bytes/copy) | Returns a new buffer with the same bytes as `src`. |
| [`replace`](/packages/stdlib/reference/bytes/replace) | Returns a copy of `hay` with every non-overlapping `old` replaced by `new`, left to right. |
| [`repeat`](/packages/stdlib/reference/bytes/repeat) | Returns `src` repeated `n` times (empty when `n <= 0`). |
| [`pad_left`](/packages/stdlib/reference/bytes/pad_left) | Returns `src` with `fill` bytes added in front until it is `width` long; a longer `src` is returned unchanged. |
| [`pad_right`](/packages/stdlib/reference/bytes/pad_right) | Returns `src` with `fill` bytes added at the end until it is `width` long; a longer `src` is returned unchanged. |
| [`to_string`](/packages/stdlib/reference/bytes/to_string) | Decodes `b` as UTF-8. |
| [`from_string`](/packages/stdlib/reference/bytes/from_string) | Returns the UTF-8 bytes of `s`; the same as [`string::to_bytes`](/docs/reference/string/to_bytes). |
