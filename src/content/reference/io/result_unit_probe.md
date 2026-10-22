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
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/io.hy#L644"
order: 20
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
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching capture_end().
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost capture_begin() and returns what it kept, as (stdout, stderr).
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
