---
description: "Bytes from the operating system's secure random source, for keys, tokens, nonces and random UUIDs."
---
`bytes(n)` returns `n` fresh bytes from the OS CSPRNG on every call. It needs
no `--allow-*` grant and no native library. For a fast, repeatable sequence
(simulations, tests), seed the stdlib `random::Rng` instead
(`Rng::from_entropy()` seeds it from this module).

```coil
use entropy::{bytes};
# use tests::assert;

fn main() {
    let key = bytes(32);
    assert!(key.len() == 32);
}
```
