---
slug: "io/result_unit_probe"
title: "result_unit_probe"
description: "Returns Ok(()) when n >= 0 and Err(IoError::InvalidInput) otherwise."
module: "io"
kind: "fn"
name: "result_unit_probe"
signature: "fn result_unit_probe(int n) -> Result<unit, IoError>"
import: "use io::{result_unit_probe};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io.hy#L607"
order: 18
---

Returns `Ok(())` when `n >= 0` and `Err(IoError::InvalidInput)` otherwise.

A small host function for testing how [`Result<unit, IoError>`](/docs/reference/prelude/Result) values
cross between the runtime and Coil code; it does no IO.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Result<unit, IoError>`

## Examples

```coil
use io::{result_unit_probe, IoError};
use tests::assert;
let ok = match result_unit_probe(1) {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let err = match result_unit_probe(-1) {
    Result::Err(IoError::InvalidInput) => true,
    default => false,
};
assert!(ok && err);
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/write): Writes bytes from buf to s without waiting and returns how many were written.
