---
slug: "crypto/crypto/aes_256_gcm_decrypt"
package: "crypto"
title: "aes_256_gcm_decrypt"
description: "Verifies and decrypts ciphertext (ciphertext plus 16-byte tag) sealed by aes_256_gcm_encrypt with the same key, nonce and aad."
module: "crypto"
kind: "fn"
name: "aes_256_gcm_decrypt"
signature: "fn aes_256_gcm_decrypt(Vec<byte> key, Vec<byte> nonce, Vec<byte> ciphertext, Vec<byte> aad) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{aes_256_gcm_decrypt};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L594"
order: 16
---

Verifies and decrypts `ciphertext` (ciphertext plus 16-byte tag) sealed by [`aes_256_gcm_encrypt`](/packages/crypto/reference/crypto/aes_256_gcm_encrypt) with the same `key`, `nonce` and `aad`.

## Parameters

| Name | Type |
|------|------|
| `key` | `Vec<byte>` |
| `nonce` | `Vec<byte>` |
| `ciphertext` | `Vec<byte>` |
| `aad` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) for a key or nonce of the wrong size,
and [`CryptoError::AuthenticationFailed`](/packages/crypto/reference/crypto/CryptoError#variant-authenticationfailed) when the ciphertext, tag or `aad`
was altered, or the key or nonce differ.

## See also

- [`crypto::aes_256_gcm_encrypt`](/packages/crypto/reference/crypto/aes_256_gcm_encrypt)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
