---
slug: "crypto/crypto/index"
package: "crypto"
title: "crypto"
description: "Hashes, HMAC, random bytes, AEAD ciphers, Ed25519 and X25519 keys, Argon2id passwords and constant-time compare."
module: "crypto"
kind: "module"
name: "crypto"
origin: "package"
auto: false
order: 0
---

Part of the [crypto](/packages/crypto) package ([coil-crypto](https://github.com/ardax-corp/coil-crypto)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/crypto)).

Import what you use (`use path::*` is not allowed):

```coil
use crypto::{CryptoError, Hasher};
```

## Types

| Name | Description |
|------|-------------|
| [`CryptoError`](/packages/crypto/reference/crypto/CryptoError) | Why a crypto call failed. |
| [`Hasher`](/packages/crypto/reference/crypto/Hasher) | An incremental hash of SHA-256, SHA-512 or BLAKE3. |

## Functions

| Name | Description |
|------|-------------|
| [`sha256`](/packages/crypto/reference/crypto/sha256) | Returns the 32-byte SHA-256 digest of `data`. |
| [`sha512`](/packages/crypto/reference/crypto/sha512) | Returns the 64-byte SHA-512 digest of `data`. |
| [`blake3`](/packages/crypto/reference/crypto/blake3) | Returns the 32-byte BLAKE3 digest of `data`. |
| [`init`](/packages/crypto/reference/crypto/init) | Starts an incremental [`Hasher`](/packages/crypto/reference/crypto/Hasher) for algorithm `alg`. |
| [`update`](/packages/crypto/reference/crypto/update) | Feeds `data` into `h`; the function form of [`Hasher.update`](/packages/crypto/reference/crypto/Hasher/update). |
| [`finalize`](/packages/crypto/reference/crypto/finalize) | Returns the digest of `h`; the function form of [`Hasher.finalize`](/packages/crypto/reference/crypto/Hasher/finalize). |
| [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256) | Returns the 32-byte HMAC-SHA256 tag of `data` under `key`. |
| [`hmac_sha512`](/packages/crypto/reference/crypto/hmac_sha512) | Returns the 64-byte HMAC-SHA512 tag of `data` under `key`. |
| [`hmac_verify_sha256`](/packages/crypto/reference/crypto/hmac_verify_sha256) | Checks in constant time that `tag` is the HMAC-SHA256 of `data` under `key`. |
| [`random_bytes`](/packages/crypto/reference/crypto/random_bytes) | Returns `n` bytes from the operating system's cryptographically secure random source. |
| [`random_u64`](/packages/crypto/reference/crypto/random_u64) | Returns 64 random bits from the operating system's cryptographically secure random source. |
| [`chacha20_poly1305_encrypt`](/packages/crypto/reference/crypto/chacha20_poly1305_encrypt) | Encrypts and authenticates `plaintext` with ChaCha20-Poly1305. |
| [`chacha20_poly1305_decrypt`](/packages/crypto/reference/crypto/chacha20_poly1305_decrypt) | Verifies and decrypts `ciphertext` (ciphertext plus 16-byte tag) sealed by [`chacha20_poly1305_encrypt`](/packages/crypto/reference/crypto/chacha20_poly1305_encrypt) with the same `key`, `nonce` and `aad`. |
| [`aes_256_gcm_encrypt`](/packages/crypto/reference/crypto/aes_256_gcm_encrypt) | Encrypts and authenticates `plaintext` with AES-256-GCM. |
| [`aes_256_gcm_decrypt`](/packages/crypto/reference/crypto/aes_256_gcm_decrypt) | Verifies and decrypts `ciphertext` (ciphertext plus 16-byte tag) sealed by [`aes_256_gcm_encrypt`](/packages/crypto/reference/crypto/aes_256_gcm_encrypt) with the same `key`, `nonce` and `aad`. |
| [`ed25519_generate`](/packages/crypto/reference/crypto/ed25519_generate) | Generates a fresh Ed25519 signing key pair as `(secret, public)`, 32 bytes each. |
| [`ed25519_sign`](/packages/crypto/reference/crypto/ed25519_sign) | Signs `msg` with the 32-byte Ed25519 `secret` key and returns the 64-byte signature. |
| [`ed25519_verify`](/packages/crypto/reference/crypto/ed25519_verify) | Checks that `sig` is a valid Ed25519 signature of `msg` by `public_key`. |
| [`x25519_generate`](/packages/crypto/reference/crypto/x25519_generate) | Generates a fresh X25519 key-agreement pair as `(secret, public)`, 32 bytes each. |
| [`x25519_shared_secret`](/packages/crypto/reference/crypto/x25519_shared_secret) | Computes the 32-byte X25519 shared secret of our `secret` key and the peer's `public_key`. |
| [`argon2id_hash`](/packages/crypto/reference/crypto/argon2id_hash) | Hashes `password` with Argon2id and returns the PHC string (`$argon2id$v=19$m=19456,t=2,p=1$...`) to store. |
| [`argon2id_verify`](/packages/crypto/reference/crypto/argon2id_verify) | Checks `password` against a PHC string from [`argon2id_hash`](/packages/crypto/reference/crypto/argon2id_hash). |
| [`ct_eq`](/packages/crypto/reference/crypto/ct_eq) | Compares `a` and `b` in constant time and returns `true` when they are equal. |
