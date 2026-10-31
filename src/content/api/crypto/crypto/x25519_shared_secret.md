---
slug: "crypto/crypto/x25519_shared_secret"
package: "crypto"
title: "x25519_shared_secret"
description: "Computes the 32-byte X25519 shared secret of our secret key and the peer's public_key."
module: "crypto"
kind: "fn"
name: "x25519_shared_secret"
signature: "fn x25519_shared_secret(Vec<byte> secret, Vec<byte> public_key) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{x25519_shared_secret};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/122607a9b54b7743796616c5e54c2e58cee15f38/src/crypto.hy#L704"
order: 21
---

Computes the 32-byte X25519 shared secret of our `secret` key and the peer's `public_key`.

Both sides get the same value. Run it through a key-derivation step (for
example [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256)) before using it as a cipher key.

## Parameters

| Name | Type |
|------|------|
| `secret` | `Vec<byte>` |
| `public_key` | `Vec<byte>` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) when either key is not 32 bytes.

## See also

- [`crypto::hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
