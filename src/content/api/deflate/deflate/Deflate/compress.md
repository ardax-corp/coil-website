---
slug: "deflate/deflate/Deflate/compress"
package: "deflate"
title: "Deflate::compress"
description: "Compresses data into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper)."
module: "deflate"
kind: "static method"
name: "compress"
parent: "Deflate"
signature: "pub static fn compress(Vec<byte> data) -> Result<Vec<byte>, DeflateError>"
import: "use deflate::{Deflate};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/e562e799729a95ee0116632f1b9a2061e9da51f2/src/deflate.hy#L676"
order: 0
---

Compresses `data` into a raw DEFLATE stream (RFC 1951, no zlib or gzip wrapper).

The output is one final block coded with LZ77 matches (32 KiB window,
lengths 3 to 258) and the fixed Huffman tables, so repetitive input
shrinks; it never falls back to stored blocks, so input with no
repeats can grow slightly. Empty input gives a valid stream that
decompresses to empty.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, DeflateError>`

## Errors

The encoder does not fail today; the [`Result`](/docs/reference/prelude/Result) keeps the signature in
step with [`decompress`](/packages/deflate/reference/deflate/Deflate/decompress).

## Examples

```coil
use deflate::{Deflate};
use string::{to_bytes};
use tests::assert;
let src = to_bytes("to be or not to be, to be or not to be");
let packed = Deflate::compress(src).ok() ?? Vec::new();
assert!(packed.len() < src.len());
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`Deflate::decompress`](/packages/deflate/reference/deflate/Deflate/decompress)
- [`Deflate`](/packages/deflate/reference/deflate/Deflate): The RFC 1951 codec, as a namespace for `Deflate::compress` and `Deflate::decompress`.
