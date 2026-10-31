---
slug: "crypto/crypto/finalize"
package: "crypto"
title: "finalize"
description: "Returns the digest of h; the function form of Hasher.finalize."
module: "crypto"
kind: "fn"
name: "finalize"
signature: "fn finalize(Hasher h) -> Result<Vec<byte>, CryptoError>"
import: "use crypto::{finalize};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L376"
order: 7
---

Returns the digest of `h`; the function form of [`Hasher.finalize`](/packages/crypto/reference/crypto/Hasher/finalize).

## Parameters

| Name | Type |
|------|------|
| `h` | `Hasher` |

## Returns

`Result<Vec<byte>, CryptoError>`

## Errors

Returns [`CryptoError::AlreadyFinalized`](/packages/crypto/reference/crypto/CryptoError#variant-alreadyfinalized) when `h` was already finalized.

## See also

- [`Hasher::finalize`](/packages/crypto/reference/crypto/Hasher/finalize)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`update`](/packages/crypto/reference/crypto/update): Feeds `data` into `h`; the function form of `Hasher.update`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
