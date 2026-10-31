---
slug: "crypto/crypto/argon2id_verify"
package: "crypto"
title: "argon2id_verify"
description: "Checks password against a PHC string from argon2id_hash."
module: "crypto"
kind: "fn"
name: "argon2id_verify"
signature: "fn argon2id_verify(Vec<byte> password, string hash) -> Result<bool, CryptoError>"
import: "use crypto::{argon2id_verify};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L752"
order: 23
---

Checks `password` against a PHC string from [`argon2id_hash`](/packages/crypto/reference/crypto/argon2id_hash).

Returns `Ok(true)` on a match; it never returns `Ok(false)`. The cost
parameters are read from `hash`.

## Parameters

| Name | Type |
|------|------|
| `password` | `Vec<byte>` |
| `hash` | `string` |

## Returns

`Result<bool, CryptoError>`

## Errors

Returns [`CryptoError::InvalidInput`](/packages/crypto/reference/crypto/CryptoError#variant-invalidinput) when `hash` is not a valid PHC string,
and [`CryptoError::AuthenticationFailed`](/packages/crypto/reference/crypto/CryptoError#variant-authenticationfailed) when the password does not match.

## See also

- [`crypto::argon2id_hash`](/packages/crypto/reference/crypto/argon2id_hash)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
