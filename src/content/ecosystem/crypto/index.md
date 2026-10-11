---
title: "coil-crypto"
description: "Userland cryptography for coil. RustCrypto lives in a cdylib (libcrypto.so / .dylib / .dll) plus Coil wrappers. use crypto::{…} is this package, not a compiler builtin."
source: "https://github.com/ardax-corp/coil-crypto/blob/46489ada6840ba74b0b07bdfe3f5d111a56485e0/README.md"
---
# coil-crypto

Userland cryptography for [coil](https://github.com/ardax-corp/coil-lang). RustCrypto lives in a cdylib (`libcrypto.so` / `.dylib` / `.dll`) plus Coil wrappers. `use crypto::{…}` is this package, not a compiler builtin.


## Layout

| Path | Role |
|------|------|
| `src/crypto.hy` | Package exports (`sha256`, `init` / `update` / `finalize`, HMAC, AEAD, Ed25519 / X25519, Argon2id, `ct_eq`) |
| `native/` | Rust cdylib, C ABI `coil_crypto_*` |
| `coil.toml` | spool manifest (`[package] name = "crypto"`); coil does not read it |

`extern "crypto"` / `dload("crypto")` resolves to `libcrypto.so` in `native/` (`--ffi-search-path ./native`; spool passes it from `[ffi] search_paths`). Hasher state is an opaque pointer in the `.so` (`Object::CryptoHasher` is gone). `Hasher.drop` calls `coil_crypto_hasher_free`.

## Build

```bash
make          # native/libcrypto.{so,dylib,dll}
make test     # cargo test in native/
```

Or:

```bash
cd native && cargo test && cargo build --release
# copy libcrypto.so / .dylib / crypto.dll into native/ (the FFI search path)
```

Argon2id MVP params are fixed (19 MiB, 2 iterations, parallelism 1) and not caller-tunable.

Consume with `spool add crypto --git https://github.com/ardax-corp/coil-crypto.git --rev <commit SHA>` (no tags yet), or a sibling checkout plus `--root`, `--ffi-search-path`, `--allow-dload crypto` and `--dload-trusted crypto` (or `--dload-pin`). See [docs/consume.md](/packages/crypto/consume).

## License

MIT. See [LICENSE](https://github.com/ardax-corp/coil-crypto/tree/46489ada6840ba74b0b07bdfe3f5d111a56485e0/LICENSE).
