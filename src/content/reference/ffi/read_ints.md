---
slug: "ffi/read_ints"
title: "read_ints"
description: "Copies count 64-bit integers (int64_t) from native memory at ptr."
module: "ffi"
kind: "fn"
name: "read_ints"
signature: "fn read_ints(int lib, int ptr, int count) -> Result<Vec<int>, Error>"
import: "use ffi::{read_ints};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/ffi.hy#L163"
order: 5
---

Copies `count` 64-bit integers (`int64_t`) from native memory at `ptr`.

For C APIs that return a pointer to an array, such as PCRE2's
`pcre2_get_ovector_pointer`. `lib` must be a handle from [`dload`](/docs/reference/ffi/dload) (else
[`ErrorKind::InvalidHandle`](/docs/reference/ffi/ErrorKind#variant-invalidhandle)): reading native memory is part of the FFI
grant. A null `ptr` or a `count` outside `0..=1048576` is
[`ErrorKind::Unsupported`](/docs/reference/ffi/ErrorKind#variant-unsupported). The pointer itself cannot be checked, so it
must point at `count` readable words.

## Parameters

| Name | Type |
|------|------|
| `lib` | `int` |
| `ptr` | `int` |
| `count` | `int` |

## Returns

`Result<Vec<int>, Error>`

## Examples

```text
use ffi::{read_ints};

// Start and end offsets of every group in the last match: 2 words each.
let ovector = read_ints(lib, pcre2_get_ovector_pointer_8(match_data), groups * 2)?;
let first_start = ovector[0];
```

## See also

- [`ffi::dload`](/docs/reference/ffi/dload)
- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
- [`declare`](/docs/reference/ffi/declare): Looks up the C function `name` in a loaded library and records its signature.
- [`invoke`](/docs/reference/ffi/invoke): Calls a function registered with `declare`, passing the tuple `args`.
