---
slug: "entropy/bytes"
title: "bytes"
description: "Returns n bytes from the operating system's cryptographically secure random source."
module: "entropy"
kind: "fn"
name: "bytes"
signature: "fn bytes(int n) -> Vec<byte>"
import: "use entropy::{bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ac871b4642030d774d5891ff78e899fa6def6daf/compiler/src/builtin_docs/entropy.coil#L24"
order: 0
---

Returns `n` bytes from the operating system's cryptographically secure random source.

Use it for keys, tokens, nonces, salts and random UUIDs. Every call
returns fresh bytes; nothing is seeded or cached in the process. It needs
no `--allow-*` grant. For a fast, repeatable sequence (simulations,
tests), seed the stdlib [`random::Rng`](/packages/stdlib/reference/random/Rng) instead, for example from a few of
these bytes.

A negative `n` panics, and so does an OS source that fails (it never
falls back to a weaker one).

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Vec<byte>`

## Examples

```coil
use entropy::{bytes};
use tests::assert;
let key = bytes(32);
assert!(key.len() == 32);
assert!(bytes(0).len() == 0);
```

## See also

- [`random::Rng`](/packages/stdlib/reference/random/Rng)
