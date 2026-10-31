---
slug: "gzip/gzip/Gzip"
package: "gzip"
title: "Gzip"
description: "The RFC 1952 codec, as a namespace for Gzip::compress and Gzip::decompress."
module: "gzip"
kind: "class"
name: "Gzip"
signature: "class Gzip"
import: "use gzip::{Gzip};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/28a79e639ba5ff86e3de889e4f948878d335a808/src/gzip.hy#L220"
order: 1
---

The RFC 1952 codec, as a namespace for [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress) and [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress).

The free functions [`compress`](/packages/gzip/reference/gzip/Gzip/compress) and [`decompress`](/packages/gzip/reference/gzip/Gzip/decompress) call these and behave the
same; use whichever spelling reads better. There is nothing to construct.

## Associated functions

| Name | Description |
|------|-------------|
| [`compress`](/packages/gzip/reference/gzip/Gzip/compress) | Wraps `data` in a single gzip member (RFC 1952). |
| [`decompress`](/packages/gzip/reference/gzip/Gzip/decompress) | Decompresses one gzip member (RFC 1952) and checks its trailer. |

## Examples

```coil
use gzip::{Gzip};
use string::{to_bytes};
use tests::assert;
let src = to_bytes("abcabcabcabc");
let gz = Gzip::compress(src).ok() ?? Vec::new();
let back = Gzip::decompress(gz).ok() ?? Vec::new();
assert!(back == src);
```

## See also

- [`Gzip::compress`](/packages/gzip/reference/gzip/Gzip/compress)
- [`Gzip::decompress`](/packages/gzip/reference/gzip/Gzip/decompress)
