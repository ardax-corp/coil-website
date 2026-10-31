---
slug: "crypto/crypto/update"
package: "crypto"
title: "update"
description: "Feeds data into h; the function form of Hasher.update."
module: "crypto"
kind: "fn"
name: "update"
signature: "fn update(Hasher h, Vec<byte> data) -> Result<(), CryptoError>"
import: "use crypto::{update};"
origin: "package"
source: "https://github.com/ardax-corp/coil-crypto/blob/d016857a83ab00e5c4f0397570843be1b851a191/src/crypto.hy#L367"
order: 6
---

Feeds `data` into `h`; the function form of [`Hasher.update`](/packages/crypto/reference/crypto/Hasher/update).

## Parameters

| Name | Type |
|------|------|
| `h` | `Hasher` |
| `data` | `Vec<byte>` |

## Returns

`Result<(), CryptoError>`

## Errors

Returns [`CryptoError::AlreadyFinalized`](/packages/crypto/reference/crypto/CryptoError#variant-alreadyfinalized) after [`finalize`](/packages/crypto/reference/crypto/finalize).

## See also

- [`Hasher::update`](/packages/crypto/reference/crypto/Hasher/update)
- [`crypto::CryptoError`](/packages/crypto/reference/crypto/CryptoError)
- [`crypto::finalize`](/packages/crypto/reference/crypto/finalize)
- [`sha256`](/packages/crypto/reference/crypto/sha256): Returns the 32-byte SHA-256 digest of `data`.
- [`sha512`](/packages/crypto/reference/crypto/sha512): Returns the 64-byte SHA-512 digest of `data`.
- [`blake3`](/packages/crypto/reference/crypto/blake3): Returns the 32-byte BLAKE3 digest of `data`.
- [`init`](/packages/crypto/reference/crypto/init): Starts an incremental `Hasher` for algorithm `alg`.
- [`hmac_sha256`](/packages/crypto/reference/crypto/hmac_sha256): Returns the 32-byte HMAC-SHA256 tag of `data` under `key`.
