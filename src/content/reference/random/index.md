---
slug: "random/index"
title: "random"
description: "Rng: a seeded pseudo-random number generator."
module: "random"
kind: "module"
name: "random"
origin: "stdlib"
auto: false
order: 36
---

Not for secrets: use `crypto::random_bytes` from [coil-crypto](/packages/crypto) for keys and tokens.

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use random::{Rng};
```

## Types

| Name | Description |
|------|-------------|
| [`Rng`](/docs/reference/random/Rng) | A seeded pseudo-random number generator. |
