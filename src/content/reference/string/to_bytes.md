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
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/string.hy#L165"
order: 7
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
- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset i of s, or -1 when i is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first needle in hay at or after start, or -1.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes bytes as UTF-8 text.
- [`match_at`](/docs/reference/string/match_at): Returns whether needle occurs in s starting exactly at byte offset at.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
