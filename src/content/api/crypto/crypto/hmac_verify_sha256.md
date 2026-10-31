---
slug: "crypto/crypto/hmac_verify_sha256"
package: "crypto"
title: "hmac_verify_sha256"
description: "Checks in constant time that tag is the HMAC-SHA256 of data under key."
module: "crypto"
kind: "fn"
name: "hmac_verify_sha256"
signature: "fn hmac_verify_sha256(Vec<byte> key, Vec<byte> data, Vec<byte> tag) -> Result<bool, CryptoError>"
import: "use crypto::{hmac_verify_sha256};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.coil#L435"
order: 10
---

Checks in constant time that `tag` is the HMAC-SHA256 of `data` under `key`.

Returns `Ok(true)` on a match; it never returns `Ok(false)`.

## Parameters

| Name | Type |
|------|------|
| `key` | `Vec<byte>` |
| `data` | `Vec<byte>` |
| `tag` | `Vec<byte>` |

## Returns

`Result<bool, CryptoError>`

## Errors

Returns [`CryptoError::AuthenticationFailed`](/packages/crypto/reference/crypto/CryptoError#variant-authenticationfailed) when the tag does not match
(including a tag of the wrong length).

## See also

- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`finalize`](/packages/crypto/reference/crypto/finalize): Returns the digest of `h`; the function form of `Hasher.finalize`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
