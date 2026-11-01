---
slug: "entropy/index"
title: "entropy"
description: "Bytes from the operating system's secure random source, for keys, tokens, nonces and random UUIDs."
module: "entropy"
kind: "module"
name: "entropy"
origin: "builtin"
auto: false
order: 14
---

`bytes(n)` returns `n` fresh bytes from the OS CSPRNG on every call. It needs
no `--allow-*` grant and no native library. For a fast, repeatable sequence
(simulations, tests), seed the stdlib [`random::Rng`](/packages/stdlib/reference/random/Rng) instead
(`Rng::from_entropy()` seeds it from this module).

```coil
use entropy::{bytes};
use tests::assert;

fn main() {
    let key = bytes(32);
    assert!(key.len() == 32);
}
```

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use entropy::{bytes};
```

## Functions

| Name | Description |
|------|-------------|
| [`bytes`](/docs/reference/entropy/bytes) | Returns `n` bytes from the operating system's cryptographically secure random source. |
