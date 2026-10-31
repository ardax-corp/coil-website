---
slug: "deflate/deflate/DeflateError"
package: "deflate"
title: "DeflateError"
description: "Why compress or decompress failed."
module: "deflate"
kind: "enum"
name: "DeflateError"
signature: "enum DeflateError"
import: "use deflate::{DeflateError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-deflate/blob/37456ec7936e9b8736b968aa3d0c702d47c36c56/src/deflate.hy#L31"
order: 0
---

Why [`compress`](/packages/deflate/reference/deflate/compress) or [`decompress`](/packages/deflate/reference/deflate/decompress) failed.

Bad input is reported through this error, never a panic. There is one
variant today; match it with a `default` arm so a later variant does not
break your code.

## Variants

### `Invalid { message: string }` {#variant-invalid}

The input is not a valid DEFLATE stream. `message` is a short reason,
such as `"empty input"`, `"truncated"` or `"bad huffman symbol"`.

## Examples

```coil
use deflate::{decompress, DeflateError};
use tests::assert;
// 0b111: final block with the reserved block type 3.
let bad: Vec<byte> = Vec::new();
bad.push(7 as byte);
let reason = match decompress(bad) {
    Result::Ok(_) => "",
    Result::Err(e) => match e {
        DeflateError::Invalid { message } => message,
        default => "other",
    },
};
assert!(reason == "reserved block type");
```

## See also

- [`deflate::compress`](/packages/deflate/reference/deflate/compress)
- [`deflate::decompress`](/packages/deflate/reference/deflate/decompress)
