---
slug: "random/index"
title: "random"
description: "Rng: a seeded pseudo-random number generator."
module: "random"
kind: "module"
name: "random"
origin: "stdlib"
auto: false
order: 37
---

Not for secrets: use `crypto::random_bytes` from [coil-crypto](/packages/crypto) for keys and tokens.

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use random::{Rng};
```

## Types

| Name | Description |
|------|-------------|
| [`Rng`](/docs/reference/random/Rng) | A seeded pseudo-random number generator. |
