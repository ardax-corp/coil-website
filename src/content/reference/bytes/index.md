---
slug: "bytes/index"
title: "bytes"
description: "The bytes module."
module: "bytes"
kind: "module"
name: "bytes"
origin: "stdlib"
auto: false
order: 16
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use bytes::{region_eq, to_hex};
```

## Functions

| Name | Description |
|------|-------------|
| [`region_eq`](/docs/reference/bytes/region_eq) | True when `a[ao..ao+n)` equals `b[bo..bo+n)` (caller guarantees bounds). |
| [`to_hex`](/docs/reference/bytes/to_hex) | Hex-encode a byte buffer (lowercase). |
| [`from_hex`](/docs/reference/bytes/from_hex) | Decode a lowercase/uppercase hex string into bytes. |
| [`slice`](/docs/reference/bytes/slice) | Copy `src[start..end)` into a new buffer (clamped to `src` bounds). |
| [`concat`](/docs/reference/bytes/concat) | Append `b` after `a` into a new buffer. |
| [`eq`](/docs/reference/bytes/eq) | True when `a` and `b` have equal length and equal bytes. |
| [`find_from`](/docs/reference/bytes/find_from) | First index of `needle` in `hay` at or after `start`, or `-1`. |
