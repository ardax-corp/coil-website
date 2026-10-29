---
slug: "string/to_bytes"
title: "to_bytes"
description: "Encodes s as UTF-8 into a new Vec<byte>."
module: "string"
kind: "fn"
name: "to_bytes"
signature: "fn to_bytes(string s) -> Vec<byte>"
import: "use string::{to_bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/string.hy#L109"
order: 4
---

Encodes `s` as UTF-8 into a new [`Vec<byte>`](/docs/reference/prelude/Vec).

Always succeeds; the result has `s.len()` bytes. Use it to pass text to
[`io::write`](/docs/reference/io/fn.write) and the other byte-based IO functions.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Vec<byte>`

## Examples

```coil
use string::{to_bytes};
use tests::assert;
let b = to_bytes("Hi");
assert!(b.len() == 2);
assert!(b[0] == 72 as byte && b[1] == 105 as byte);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`io::write`](/docs/reference/io/fn.write)
- [`format`](/docs/reference/string/format): Builds a string from the literal `fmt` and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes `bytes` as UTF-8 text.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive).
