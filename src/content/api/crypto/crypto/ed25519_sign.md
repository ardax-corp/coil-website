---
slug: "crypto/crypto/ed25519_sign"
package: "crypto"
title: "ed25519_sign"
description: "Signs msg with the 32-byte Ed25519 secret key and returns the 64-byte signature."
module: "crypto"
kind: "fn"
name: "ed25519_sign"
signature: "fn ed25519_sign(Vec<byte> secret, Vec<byte> msg) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{ed25519_sign};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L645"
order: 18
---

Signs `msg` with the 32-byte Ed25519 `secret` key and returns the 64-byte signature.

Signing is deterministic: the same key and message give the same signature.

## Parameters

| Name | Type |
|------|------|
| `secret` | `Vec<byte>` |
| `msg` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) when `secret` is not 32 bytes.

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
