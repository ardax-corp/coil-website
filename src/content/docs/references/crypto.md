---
title: "Cryptography ([coil-crypto](https://github.com/ardax-corp/coil-crypto))"
description: "Crypto is userland in coil-crypto, not a compiler builtin. use crypto::{sha256}; without that package on [module].roots is a module-not-found error. The VM does not register…"
---

# Cryptography ([coil-crypto](https://github.com/ardax-corp/coil-crypto))

Crypto is **userland** in [coil-crypto](https://github.com/ardax-corp/coil-crypto), not a compiler builtin. `use crypto::{sha256};` without that package on `[module].roots` is a module-not-found error. The VM does not register `crypto_*` HostInvoke slots; load the package with `dload` the same way as [coil-regex](/docs/references/regex) and [coil-tls](/docs/references/tls).

## Sibling checkout

Clone [coil-crypto](https://github.com/ardax-corp/coil-crypto) beside your project and point `coil.toml` at it:

```toml
[module]
roots = ["./src", "../coil-crypto/src"]

[ffi]
search_paths = ["../coil-crypto/native"]
```

Then:

```coil
use crypto::{sha256, random_bytes, ct_eq};
```

**Docs:** [coil-crypto](https://github.com/ardax-corp/coil-crypto)

---

## Related

- [TLS](/docs/references/tls)
- [What is NOT a builtin](/docs/references/not-builtins)
