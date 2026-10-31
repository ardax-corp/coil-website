---
slug: "deflate/deflate/Deflate"
package: "deflate"
title: "Deflate"
description: "The RFC 1951 codec, as a namespace for Deflate::compress and Deflate::decompress."
module: "deflate"
kind: "class"
name: "Deflate"
signature: "class Deflate"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/e562e799729a95ee0116632f1b9a2061e9da51f2/src/deflate.hy#L647"
order: 1
---

The RFC 1951 codec, as a namespace for [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress) and [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress).

The free functions [`compress`](/packages/deflate/reference/deflate/Deflate/compress) and [`decompress`](/packages/deflate/reference/deflate/Deflate/decompress) call these and behave the
same; use whichever spelling reads better. There is nothing to construct.

## Associated functions

| Name | Description |
|------|-------------|
| [`compress`](/packages/deflate/reference/deflate/Deflate/compress) | Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper). |
| [`decompress`](/packages/deflate/reference/deflate/Deflate/decompress) | Decompresses a raw DEFLATE stream (RFC 1951) back to its bytes. |

## Examples

```coil
use deflate::{Deflate};
use string::{to_bytes};
use tests::assert;
let src = to_bytes("abcabcabcabc");
let packed = Deflate::compress(src).ok() ?? Vec::new();
let back = Deflate::decompress(packed).ok() ?? Vec::new();
assert!(back == src);
```

## See also

- [`Deflate::compress`](/packages/deflate/reference/deflate/Deflate/compress)
- [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress)
