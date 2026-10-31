---
slug: "crypto/crypto/ed25519_verify"
package: "crypto"
title: "ed25519_verify"
description: "Checks that sig is a valid Ed25519 signature of msg by public_key."
module: "crypto"
kind: "fn"
name: "ed25519_verify"
signature: "fn ed25519_verify(Vec<byte> public_key, Vec<byte> msg, Vec<byte> sig) -> Result<bool, CryptoError>"
import: "use crypto::{ed25519_verify};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L660"
order: 19
---

Checks that `sig` is a valid Ed25519 signature of `msg` by `public_key`.

Returns `Ok(true)` on success; it never returns `Ok(false)`. Verification
is strict (non-canonical signatures and weak keys are rejected).

## Parameters

| Name | Type |
|------|------|
| `public_key` | `Vec<byte>` |
| `msg` | `Vec<byte>` |
| `sig` | `Vec<byte>` |

## Returns

`Result<bool, CryptoError>`

## Errors

Returns [`CryptoError::InvalidLength`](/packages/crypto/reference/crypto/CryptoError#variant-invalidlength) when `public_key` is not 32 bytes or
`sig` not 64, [`CryptoError::InvalidInput`](/packages/crypto/reference/crypto/CryptoError#variant-invalidinput) when `public_key` is not a valid
point, and [`CryptoError::AuthenticationFailed`](/packages/crypto/reference/crypto/CryptoError#variant-authenticationfailed) when the signature does not verify.

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
