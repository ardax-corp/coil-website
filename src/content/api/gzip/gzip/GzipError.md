---
slug: "gzip/gzip/GzipError"
package: "gzip"
title: "GzipError"
description: "Why compress or decompress failed."
module: "gzip"
kind: "enum"
name: "GzipError"
signature: "enum GzipError"
import: "use gzip::{GzipError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-gzip/blob/28a79e639ba5ff86e3de889e4f948878d335a808/src/gzip.hy#L30"
order: 0
---

Why [`compress`](/packages/gzip/reference/gzip/compress) or [`decompress`](/packages/gzip/reference/gzip/decompress) failed.

Bad input is reported through this error, never a panic. Errors from the
DEFLATE body are passed through with the same message. There is one
variant today; match it with a `default` arm so a later variant does not
break your code.

## Variants

### `Invalid { message: string }` {#variant-invalid}

The input is not a valid gzip member. `message` is a short reason,
such as `"bad magic"`, `"truncated header"`, `"bad crc"` or a DEFLATE
error like `"truncated"`.

## Examples

```coil
use gzip::{decompress, GzipError};
use string::{to_bytes};
use tests::assert;
let reason = match decompress(to_bytes("not a gzip member")) {
    Result::Ok(_) => "",
    Result::Err(e) => match e {
        GzipError::Invalid { message } => message,
        default => "other",
    },
};
assert!(reason == "bad magic");
```

## See also

- [`gzip::compress`](/packages/gzip/reference/gzip/compress)
- [`gzip::decompress`](/packages/gzip/reference/gzip/decompress)
