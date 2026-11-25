---
slug: "ffi/types/Ptr"
title: "Ptr"
description: "FFI tag for a raw pointer (void *), returned as an int address."
module: "ffi::types"
kind: "class"
name: "Ptr"
signature: "class Ptr"
import: "use ffi::types::{Ptr};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/ffi/types.coil#L89"
order: 12
---

FFI tag for a raw pointer (`void *`), returned as an [`int`](/docs/reference/types/int) address.

Written `ptr` in an `extern` block. A [`Vec<int>`](/docs/reference/prelude/Vec) parameter is passed as
a pointer to a temporary `int64_t[]` copy whose changes are copied back
after the call. Keep a value C retains alive with [`gc::root`](/docs/reference/gc/fn.root).

## Examples

```text
extern "sum" {
    // int64_t sum_array(const int64_t *xs, int64_t n)
    fn sum_array(Vec<int> xs, int n) -> int;
}

let n = sum_array([1, 2, 3, 4, 5], 5); // 15
```

## See also

- [`int`](/docs/reference/types/int)
- [`Vec`](/docs/reference/prelude/Vec)
- [`gc::root`](/docs/reference/gc/fn.root)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
